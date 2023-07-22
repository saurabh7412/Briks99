const express = require("express");

const router = express.Router();

const Posts = require("../Models/postModel");

const BL = require("../Models/BlackListed");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");
const Auth = require("../Middleware/Auth");

router.get("/", Auth, async (req, res) => {
  try {
    const { title, location, price, page, limit, q } = req.query;

    let filter = {};
    let pages = 1;
    let limits = 40;

    if (q) {
      filter.description = { $regex: q, $options: "i" };
    }
    
    if (title) {
      filter.title = { $regex: title, $options: "i" };
    }

    if (location) {
      filter.location = { $regex: location, $options: "i" };
    }

    if (page) {
      pages = page;
    }
    if (limit) {
      limits = limit;
    }

    if (price) {
      filter.price = price;
    }

    const skip = (Number(page) - 1) * limit;

    const AllPosts = await Posts.find(filter).skip(skip).limit(limits);
    res.status(200).send({ AllPosts });


  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/add", Auth, async (req, res) => {
  try {
    const newHome = await Posts.create(req.body);
    res.status(200).send({ msg: "New Home Added !", newHome });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.patch("/update/:id", Auth, async (req, res) => {
  try {
    const { id } = req.params;

    const data = await Posts.findByIdAndUpdate(id, req.body);

    const updatedData = await Posts.findById(id);

    return res.status(200).send({ updatedData });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete("/delete/:id", Auth, async (req, res) => {
  try {
    const { id } = req.params;

    const deletedData = await Posts.findByIdAndDelete(id);

    return res.status(200).send({ msg: "Home Info Deleted", deletedData });
  } catch (error) {
    res.status(400).send(error);
  }
});




module.exports = router;
