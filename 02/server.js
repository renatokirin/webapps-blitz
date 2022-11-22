const express = require("express");
const app = express();
const cors = require("cors");
const port = 5000;
app.use(cors());
app.use(express.json());

const { MongoClient, ObjectId, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://renatokirin:q239HG9TQ1d0SZsw@webapps.x04n0lo.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
const database = client.db("test");
const collection = database.collection("blitz");

app.post("/saveItem", async (req, response) => {

    let item = req.body;


    collection.insertOne(item).then(result => {
        return response.status(200).json({ status: "OK" ,"message": `Item ${item.name} saved in DB` });
    }).catch(err => {
        return response.status(500).json({ "message": err });
    });
});


app.listen(port, () => console.log(`Works on port ${port}`));