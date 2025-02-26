const express = require("express");
const router = express.Router();
const Person = require("../models/person");
router.post("/", async (req, res) => {
  const data = req.body;
  const newPerson = new Person(data);

  try {
    await newPerson.save();
    console.log("Person added successfully");
    res.status(201).json({
      message: "Person added successfully",
      person: newPerson,
    });
  } catch (error) {
    console.error("Error adding person:", error);
    res.status(500).json({ message: "Internal Server Error", error });
  }
});

router.get("/:work", async (req, res) => {
  try {
    const work = req.params.work;
    if (work == "chef" || work == "waiter" || work == "manager") {
      const data = await Person.find({ work: work });
      res.status(200).json(data);
    } else {
      res
        .status(404)
        .json({ message: "data could not fetched Invalid work type" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

router.get("/", async (req, res) => {
  const data = await Person.find({});
  res.send(data);
});

router.put("/:id", async (req, res) => {
  try {
    const personId = req.params.id;
    const personData = req.body;

    const response = await Person.findByIdAndUpdate(personId, personData, {
      new: true,
      runValidators: true,
    });
    console.log("updated data");
    res.status(200).json(response);
    if (!response) {
      res.status(404).json({ error: "person not found" });
    }
  } catch (e) {
    console.log(e);
    res.status(500).json({ message: e });
  }
});

router.delete('/:id', async (req,res)=>{
    try{
        const personId = req.params.id;
    const response = await Person.findByIdAndRemove(personId);
    if (!response) {
        res.status(404).json({ error: "person not found" });
      }
      console.log('data deleted');
      res.status(200).json(response);
    }
    catch(e){
        console.log(e);
        res.status(500).json({ message: e });
    }
})


module.exports = router;
