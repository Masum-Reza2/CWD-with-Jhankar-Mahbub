const express = require('express');
const cors = require('cors');
require('dotenv').config();
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');

const app = express();
const port = process.env.PORT || 5000;

// middlewares
app.use(cors());
app.use(express.json());
app.use(cookieParser());



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

    const database = client.db("emaJohnDB");
    const productCollection = database.collection("products");

    // >>>>>>>>CRUD Endpoints<<<<<<<<<<

    // specific productby id
    app.post('/productByid', async (req, res) => {
      try {
        const ids = req.body;
        const productIds = ids.map(id => new ObjectId(id))
        // console.log(productIds)

        // sending data matches only the id
        const query = { _id: { $in: productIds } };

        const cursor = productCollection.find(query);
        const result = await cursor.toArray();
        res.send(result)
      } catch (error) {
        res.send(error)
        console.log(error)
      }
    })


    //>>>>>>>>>>>>>>>>>>> pagination new things<<<<<<<<<<<<<<<<<<<<<<<
    // always use try catch to prevent server crash
    app.get('/productCount', async (req, res) => {
      try {
        const count = await productCollection.estimatedDocumentCount();
        res.send({ count }) // sending total product number in client side.
      } catch (error) {
        console.log(error)
      }
    })

    app.get('/products', async (req, res) => {
      try {
        // console.log(req.query);
        const page = Number.parseFloat(req?.query?.page) || 0;
        const size = Number.parseFloat(req?.query?.size) || 10;
        // console.log(page, size)

        const skip = (page - 1) * size;
        // console.log(skip)

        const cursor = productCollection.find();
        const result = await cursor.skip(skip).limit(size).toArray();

        // const result = await productCollection.find({}).skip(skip).limit(size).toArray();

        res.send(result)
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


//  root server
app.get('/', (req, res) => {
  res.send('john is busy shopping')
})

app.listen(port, () => {
  console.log(`ema john server is running on port: ${port}`);
})
