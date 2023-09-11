const express = require("express");

const router = express.Router();

const Admin = require("../Models/adminModel");

const BL = require("../Models/BlackListed");

const jwt = require("jsonwebtoken");

const bcrypt = require("bcrypt");

router.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await Admin.findOne({ username });



    if (admin.username === username && admin.password === password) {
      return res.status(200).send({ msg: "Admin Login Successful !"});
    }else{
      return res.status(200).send({ msg: "Wrong Credentials !"});

    }
  } catch (error) {
    res.status(500).send(error.message);
  }
});

module.exports = router;
