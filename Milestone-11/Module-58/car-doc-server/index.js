const express = require('express');
const cors = require('cors');
require('dotenv').config();
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const app = express();
const port = process.env.PORT || 5000; //to prevent server deployment issue

// middlewares
app.use(cors());  // to prevent fetching issue from different ports
app.use(express.json()); // to prevent req.body undefined. a build in feature.



const uri = `mongodb+srv://${process.env.BD_USER}:${process.env.BD_PASS}@cluster0.mf3nl9y.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function run() {
    try {
        // Connect the client to the server	(optional starting in v4.7)
        await client.connect(); // comment out this two await to prevent deployment problem in vercel

        // all endpoints here
        const database = client.db("carDoctor");
        const serviceCollection = database.collection("services");

        // CRUD operation endpoints
        // Read many
        app.get('/services', async (req, res) => {
            const cursor = serviceCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // Read one 
        app.get('/service/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };

            const options = {
                // Include only the `title` and `imdb` fields in the returned document
                projection: { title: 1, price: 1, service_id: 1, img: 1 },
            };

            const result = await serviceCollection.findOne(query, options);
            res.send(result);
        })

        //>>>>>>>>>>>>> booking endpoints<<<<<<<<<<<<<<<<
        const bookingCollection = database.collection("bookings");

        // Create opt
        app.post('/bookings', async (req, res) => {
            const booking = req.body;
            const result = await bookingCollection.insertOne(booking);
            res.send(result);
        })

        // Read opt
        app.get('/bookings', async (req, res) => {

            let query = {};
            if (req.query?.email) {
                query = { email: req.query?.email };
            }

            const result = await bookingCollection.find(query).toArray();
            res.send(result);
            // console.log(req.query.email)
        })

        // Delete opt
        app.delete('/bookings/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await bookingCollection.deleteOne(query);
            res.send(result);
        })

        // Update opt
        app.patch('/bookings/:id', async (req, res) => {
            const id = req.params.id;
            const tobeupdateDoc = req.body;
            const filter = { _id: new ObjectId(id) };
            const updateDoc = {
                $set: {
                    status: tobeupdateDoc?.status,
                },
            };
            const result = await bookingCollection.updateOne(filter, updateDoc);
            res.send(result);
        })

        // Send a ping to confirm a successful connection
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
        // Ensures that the client will close when you finish/error
        // await client.close();
    }
}
run().catch(console.dir);


//  root of the server
app.get('/', (req, res) => {
    res.send('Car Doctors running!')
})

app.listen(port, () => {
    console.log(`car-Doctor app listening on port ${port}`)
})