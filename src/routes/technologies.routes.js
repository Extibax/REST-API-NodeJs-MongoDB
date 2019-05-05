import { Router } from "express";
import { ObjectID } from "mongodb";

import { connect } from "../database/connection";

const router = Router();

/* Get All Technologies*/
router.get("/", async (req, res) => {
  const database = await connect();
  const result = await database
    .collection("technologies")
    .find({})
    .toArray();
  console.log(result);
  res.json(result);
});

/* Get One Technologie */
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const database = await connect();
  const result = await database.collection("technologies").findOne({
    _id: ObjectID(id)
  });
  console.log(result);
  res.json(result);
});

/* Post Technologie */
router.post("/", async (req, res) => {
  const database = await connect();
  const technologie = {
    name: req.body.name,
    like: req.body.like,
    info: {
      experience: req.body.info.experience,
      description: req.body.info.description
    }
  };
  const result = await database
    .collection("technologies")
    .insertOne(technologie);
  console.log({
    message: `Technologie ${req.body.name} created`,
    result: result.ops[0]
  });
  res.json({
    message: `Technologie ${req.body.name} created`,
    result: result.ops[0]
  });
});

/* Put (Update) Technologie */
router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const technologie_update = {
    name: req.body.name,
    like: req.body.like,
    info: {
      experience: req.body.info.experience,
      description: req.body.info.description
    }
  };
  const database = await connect();
  const result = await database.collection("technologies").updateOne(
    {
      _id: ObjectID(id)
    },
    {
      $set: technologie_update
    }
  );
  console.log({
    message: `Technologie with id: ${id} updated`,
    result
  });
  res.json({
    message: `Technologie with id: ${id} updated`,
    result
  });
});

/* Delete Technologie */
router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const database = await connect();
  const result = await database.collection("technologies").deleteOne({
    _id: ObjectID(id)
  });
  console.log({
    message: `Technologie with id: ${id} deleted`,
    result
  });
  res.json({
    message: `Technologie with id: ${id} deleted`,
    result
  });
});

export default router;
