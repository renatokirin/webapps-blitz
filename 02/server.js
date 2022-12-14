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

// http://localhost:5000/getBrand/New
app.get("/getBrand/:brand", async (req, response) => {
    let query = { brand: req.params.brand };

    collection.find(query).toArray().then(result => {
        if (!result.length == 0) return response.status(200).json(result);
        return response.json({ "status": "Failed", "message": `Brand ${req.params.brand} not found in DB`});
    }).catch(err => {
        return response.status(500).json({ "message": err });
    });
});


app.get("/getItemById/:id", async (req, response) => {
    let query = { _id: ObjectId(req.params.id) };

    collection.find(query).toArray().then(result => {
        if (!result.length == 0) return response.status(200).json(result);
        return response.json({ "status": "Failed", "message": `Item not found in DB`}); //
    }).catch(err => {
        return response.status(500).json({ "message": err });
    });    
});

app.patch("/updateItemPrice/:id", async (req, response) => {
    let query = { _id: ObjectId(req.params.id) };

    let cijena = req.body.newPrice;

    collection.updateOne(query, { $set: { 'price': cijena } }).then(result => {
        if (!result.length == 0) return response.status(200).json({"message": `Item ${req.params.id} updated with new price ${cijena}`});
        return response.json({ "status": "Failed", "message": `Couldn't find the item`});
    }).catch(err => {
        return response.status(500).json({ "message": err });
    });    
});


app.listen(port, () => console.log(`Works on port ${port}`));