const express = require("express");
const router = express.Router();
const { MongoClient, ObjectId } = require("mongodb");

const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);

router.get("/", async (req, res) => {
  let dbArray = null;
  try {
    await client.connect();
    dbArray = await client
      .db("abbrevsDB_React")
      .collection("abbreviations")
      .find()
      .toArray();
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
  res.status(200).json(dbArray);
});

router.post("/", async (req, res) => {
  const abbrev = req.body;
  try {
    await client.connect();
    await client.db("abbrevsDB_React").collection("abbreviations").insertOne(abbrev);
  } catch (e) {
    console.log(e);
  } finally {
    await client.close();
  }
  res.status(200);
});

router.delete("/", async (req, res) => {
  const id = req.body.id;
  try {
    await client.connect();
    await client
      .db("abbrevsDB_React")
      .collection("abbreviations")
      .deleteOne({ _id: new ObjectId(id) });
  } catch (e) {
    console.log(e);
  } finally {
    client.close();
  }
  res.status(200);
});

router.put('/', async (req, res) => {
  let id = req.body.id;
  let edited_abbrev = req.body.edited_abbrev;
  let edited_definition = req.body.edited_definition;
  try {
    await client.connect();
    await client.db('abbrevsDB_React').collection('abbreviations').updateOne({_id: new ObjectId(id)},{ $set: {abbrev: edited_abbrev, definition: edited_definition}})
    
  } catch(e) {
    console.log(e)
  } finally {
    await client.connect();
  }
  res.status(200);
})

module.exports = router;
