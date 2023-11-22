const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const jwt = require('jsonwebtoken');

//  >>>>>>>>>>>>>new things payment gateWay<<<<<<<<<<<<<<<<<<<
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);



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
        // await client.connect();

        const database = client.db("BistroDb");
        const menuCollection = database.collection("menu");
        const reviewCollection = database.collection("reviews");
        const userCollection = database.collection("users");
        const paymentCollection = database.collection("payments");




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
        app.get('/users/admin/:email', async (req, res) => {
            try {
                const email = req?.params?.email;

                // if any bagarbilla checking this
                // if (email !== req?.decoded?.email) {
                //     res.status(403).send({ message: 'forbidden acces' })
                // }

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

        // menu related api
        app.get('/menu', async (req, res) => {
            try {
                const result = await menuCollection.find().toArray();
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })

        //  remember that only admin can add an item
        app.post('/menu', verifyToken, verifyAdmin, async (req, res) => {
            try {
                const item = req?.body;
                const result = await menuCollection.insertOne(item);
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })

        app.get('/menu/:id', async (req, res) => {
            try {
                const id = req?.params?.id;
                const query = { _id: new ObjectId(id) };
                const result = await menuCollection.findOne(query);
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })

        // only admin can do this 
        app.patch('/menu/:id', verifyToken, verifyAdmin, async (req, res) => {
            try {
                const id = req?.params?.id;
                const filter = { _id: new ObjectId(id) }
                const item = req?.body;
                const updateDoc = {
                    $set: {
                        ...item
                    },
                };
                const result = await menuCollection.updateOne(filter, updateDoc);
                res.send(result)
            } catch (error) {
                console.log(error)
            }
        })

        //  only admin can delete this 
        app.delete('/menus/:id', verifyToken, verifyAdmin, async (req, res) => {
            try {
                const id = req?.params?.id;
                console.log(id)
                const query = { _id: new ObjectId(id) };
                const result = await menuCollection.deleteOne(query);
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


        // >>>>>>>>>>>>>>>>PAYMENT INTENT<<<<<<<<<<<<<<<<<<
        app.post("/create-payment-intent", async (req, res) => {
            try {
                const { price } = req?.body;
                const amount = parseInt(price * 100);

                const paymentIntent = await stripe.paymentIntents.create({

                    amount: amount,

                    // don't forget to add it
                    payment_method_types: ["card"],

                    currency: "usd",
                });

                res.send({
                    clientSecret: paymentIntent.client_secret,
                });

            } catch (error) {
                console.log(error)
            }
        })

        // payment history collection and delete carts item two in one
        app.post('/payments', async (req, res) => {
            try {
                const payment = req?.body;

                // saved history to db
                const paymentResult = await paymentCollection.insertOne(payment);

                // now carefully delete the confirmed cart items
                const query = {
                    _id: {
                        $in: payment?.cartIds?.map(id => new ObjectId(id))
                    }
                }
                const deleteResult = await cartCollection.deleteMany(query);

                res.send({ paymentResult, deleteResult });

            } catch (error) {
                console.log(error)
            }
        })

        // get payment history user specific
        app.get('/payments/:email', verifyToken, async (req, res) => {
            try {
                const email = req?.params?.email;
                if (email !== req.decoded.email) {
                    return res.status(403).send({ message: 'forbidden access' });
                }
                const filter = { email: email };
                const result = await paymentCollection.find(filter).toArray();
                res.send(result);
            } catch (error) {
                console.log(error)
            }
        })

        // state and analytics
        app.get('/admin-states', async (req, res) => {
            try {
                const users = await userCollection.estimatedDocumentCount();
                const menuItems = await menuCollection.estimatedDocumentCount();
                const orders = await paymentCollection.estimatedDocumentCount();

                // this is not the best way
                // const totalRevenue = await paymentCollection.find().toArray();
                // const revenue = totalRevenue.reduce((prev, curr) => prev + curr?.price, 0)

                // this is the right approach
                // >>>>>>>new learnings
                const totalRevenue = await paymentCollection.aggregate([
                    {
                        $group: {
                            _id: null,
                            totalRevenue: { $sum: "$price" }
                        }
                    }
                ]).toArray();
                // Extract the total revenue from the result
                const revenue = totalRevenue.length > 0 ? totalRevenue[0].totalRevenue : 0;
                console.log('Total Revenue:', revenue);
                // >>>>>>>new learnings


                res.send({
                    users,
                    menuItems,
                    orders,
                    revenue
                })
            } catch (error) {
                console.log(error)
            }
        })


        // >>>>>>>>>>>>copy code<<<<<<<<<<<<<<<
        // app.get('/salesAnalysis', async (req, res) => {
        //     try {
        //         const salesAnalysis = await paymentCollection.aggregate([
        //             {
        //                 $unwind: "$menuItemId"
        //             },
        //             {
        //                 $lookup: {
        //                     from: "menuCollection",
        //                     localField: "menuItemId",
        //                     foreignField: "_id",
        //                     as: "menuDetails"
        //                 }
        //             },
        //             {
        //                 $unwind: "$menuDetails"
        //             },
        //             {
        //                 $group: {
        //                     _id: "$menuDetails._id",
        //                     name: { $first: "$menuDetails.name" },
        //                     price: { $first: "$menuDetails.price" },
        //                     soldCount: { $sum: 1 },
        //                     totalRevenue: { $sum: "$menuDetails.price" }
        //                 }
        //             }
        //         ]).toArray();

        //         res.json(salesAnalysis);
        //     } catch (error) {
        //         console.error('Error:', error);
        //         res.status(500).send('Internal Server Error');
        //     }
        // });
        // >>>>>>>>>>>>copy code<<<<<<<<<<<<<<<


        // >>>>>>>>>>>>Aggregate pipeline<<<<<<<<<<<<<<<
        // using aggregate pipeline
        app.get('/salesAnalysis', async (req, res) => {
            const result = await paymentCollection.aggregate([
                {
                    $unwind: '$menuItemIds'
                },
                {
                    $lookup: {
                        from: 'menu',
                        localField: 'menuItemIds',
                        foreignField: '_id',
                        as: 'menuItems'
                    }
                },
                {
                    $unwind: '$menuItems'
                },
                {
                    $group: {
                        _id: '$menuItems.category',
                        quantity: { $sum: 1 },
                        revenue: { $sum: '$menuItems.price' }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        category: '$_id',
                        quantity: '$quantity',
                        revenue: '$revenue'
                    }
                }
            ]).toArray();

            res.send(result);

        })
        // >>>>>>>>>>>>Aggregate pipeline<<<<<<<<<<<<<<<


        // if the aggregate not works then my akheri sombol
        app.get('/testAnalysis', verifyToken, verifyAdmin, async (req, res) => {
            try {
                let all = await paymentCollection.find().toArray();
                let paymentIds = all.map(item => item.menuItemIds).join(',').split(',');

                const query = {
                    _id: {
                        $in: paymentIds.map(id => new ObjectId(id))
                    }
                }

                const menuItems = await menuCollection.find(query).toArray();

                // Separate category and price information
                const chartData = menuItems.map(item => ({
                    category: item.category,
                    price: item.price
                }));

                res.send(chartData);

            } catch (error) {
                console.log(error)
            }
        })
        // if the aggregate not works then my akheri sombol




        // app.all('/*', (req, res) => {
        //     try {
        //         res.send({ message: `The route does't match any route` })
        //     } catch (error) {
        //         console.log(error)
        //     }
        // })

        // Send a ping to confirm a successful connection
        // await client.db("admin").command({ ping: 1 });
        // console.log("Pinged your deployment. You successfully connected to MongoDB!");
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