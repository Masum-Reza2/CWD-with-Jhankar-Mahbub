const express = require('express');
const app = express();
const cors = require('cors'); //for allowing fecth in localhost from different port.
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const port = process.env.PORT || 5000; // to prevent production level problem


// middleware
app.use(cors()); //for allowing fecth in localhost from different port.
app.use(express.json()); // to prevent req.body undefined

// mongodb datas important
// careerhunter4280
// w1Jc5bceZJGulOci



// copied from mongodb docs

const uri = "mongodb+srv://careerhunter4280:w1Jc5bceZJGulOci@cluster0.mf3nl9y.mongodb.net/?retryWrites=true&w=majority";

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
        await client.connect();

        // sending to database || from node mongodb CRUD
        const database = client.db("usersDB");
        const usersCollection = database.collection("users");

        // Read/ get many
        app.get('/users', async (req, res) => {
            const cursor = usersCollection.find();
            const result = await cursor.toArray();
            res.send(result);
        })

        // get single by id also read
        app.get('/users/:id', async (req, res) => {
            const id = req.params.id;
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.findOne(query);
            res.send(result);
        })

        // Create
        app.post('/users', async (req, res) => {
            const newUser = req.body;
            console.log('new user is', newUser);
            const result = await usersCollection.insertOne(newUser);
            res.send(result);
        })

        // update
        app.put('/users/:id', async (req, res) => {
            const id = req.params.id;
            const tobeUpdate = req.body;
            console.log(tobeUpdate, id);

            // sending to database
            const filter = { _id: new ObjectId(id) };
            const options = { upsert: true };
            const updateUser = {
                $set: {
                    name: tobeUpdate.name,
                    email: tobeUpdate.email,
                },
            };
            const result = await usersCollection.updateOne(filter, updateUser, options);
            res.send(result)
        })

        // Delete
        app.delete('/users/:id', async (req, res) => {
            const id = req.params.id;
            console.log('please delete from database', id);
            const query = { _id: new ObjectId(id) };
            const result = await usersCollection.deleteOne(query);
            res.send(result)
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


app.get('/', (req, res) => {
    res.send('Hitting get request')
})



app.listen(port, () => {
    console.log(`server is listening on port ${port}`)
})