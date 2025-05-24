// server/routes/career.js

const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");

const CareerSchema = new mongoose.Schema({
  name: String,
  age: String,
  education: String,
  interests: String,
  location: String,
});

const Career = mongoose.model("Career", CareerSchema);

router.get("/", async (req, res) => {
  try {
    const careers = await Career.find();
    res.json(careers);
  } catch (err) {
    res.status(500).json({ message: "Error fetching career data" });
  }
});



router.post("/", async (req, res) => {
  try {
    const newEntry = new Career(req.body);
    await newEntry.save();
    res.status(200).json({ message: "Form submitted successfully!" });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong", error });
  }
});

module.exports = router;
