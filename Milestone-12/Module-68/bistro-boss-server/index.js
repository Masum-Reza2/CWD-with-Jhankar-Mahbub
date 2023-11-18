const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config()
const jwt = require('jsonwebtoken');


const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

const verifyToken = (req, res, next) => {
    try {
        const token = req?.headers?.token;
        // console.log(token)
        if (!token) {
            return res?.status(401)?.send({ message: 'forbidden access' })
        }
        jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
            if (err) {
                return res.status(401).send({ message: 'forbidden access' })
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    } catch (error) {
        console.log(error)
    }
}



const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.mf3nl9y.mongodb.net/?retryWrites=true&w=majority`;

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

        const database = client.db("BistroDb");
        const menuCollection = database.collection("menu");
        const reviewCollection = database.collection("reviews");
        const userCollection = database.collection("users");




        const verifyAdmin = async (req, res, next) => {
            try {
                const email = req?.decoded?.email;

                const filter = { email: email }
                const user = await userCollection.findOne(filter)

                if (user?.role !== 'admin') {
                    return res.status(403).send({ message: 'forbidden access' })
                }
                next();
            } catch (error) {
                console.log(error)
            }
        }

        // jwt related api
        app.post('/jwt', async (req, res) => {
            try {
                const user = req.body;
                const token = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1h' });
                res.send({ token })
            } catch (error) {
                console.log(error)
            }
        })



        // user related api's
        app.get('/users', verifyToken, verifyAdmin, async (req, res) => {
            try {
                const result = await userCollection.find().toArray();
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })

        // admin chacker
        app.get('/users/admin/:email', verifyToken, async (req, res) => {
            try {
                const email = req?.params?.email;

                // if any bagarbilla checking this
                if (email !== req?.decoded?.email) {
                    res.status(403).send({ message: 'forbidden acces' })
                }

                const filter = { email: email };
                const user = await userCollection.findOne(filter);

                let admin = false;
                if (user?.role === 'admin') {
                    admin = true
                }
                res.send({ admin })
            } catch (error) {
                console.log(error)
            }
        })

        app.post('/users', async (req, res) => {
            try {
                const user = req?.body;
                console.log(user);

                const query = { email: user?.email }
                const isExist = await userCollection.findOne(query);
                if (isExist) {
                    return res.send({ message: 'user is already exist', insertedId: null })
                }

                const result = await userCollection.insertOne(user);
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })

        app.delete('/users/:id', verifyToken, verifyAdmin, async (req, res) => {
            try {
                const id = req?.params?.id;
                console.log(id)
                const query = { _id: new ObjectId(id) };
                const result = await userCollection.deleteOne(query);
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })

        //  admin maker
        app.patch('/users/admin/:id', verifyToken, verifyAdmin, async (req, res) => {
            try {
                const id = req?.params?.id;
                const filter = { _id: new ObjectId(id) };
                const updateDoc = {
                    $set: {
                        role: `admin`
                    },
                };
                const result = await userCollection.updateOne(filter, updateDoc)
                res.send(result)
            } catch (error) {
                console.log(error)
            }
        })

        app.get('/menu', async (req, res) => {
            try {
                const result = await menuCollection.find().toArray();
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })
        app.get('/review', async (req, res) => {
            try {
                const result = await reviewCollection.find().toArray();
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })

        // >>>>>>>Cart related api's<<<<<<<<<
        const cartCollection = database.collection("carts");
        app.post('/carts', async (req, res) => {
            try {
                const cartItem = req?.body;
                const result = await cartCollection.insertOne(cartItem);
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })

        app.get('/carts', async (req, res) => {
            try {

                const email = req?.query?.email;
                const query = { email: email };

                const result = await cartCollection.find(query).toArray();
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })

        app.delete('/carts/:id', async (req, res) => {
            try {
                const id = req?.params?.id;
                const query = { _id: new ObjectId(id) };
                const result = await cartCollection.deleteOne(query);
                res.send(result);
            } catch (error) {
                console.log(error)
            }
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



//  root app endpoint
app.get('/', (req, res) => {
    res.send('Bistro Boss server Running!')
})

app.listen(port, () => {
    console.log(`Bistro Boss listening on port ${port}`)
})