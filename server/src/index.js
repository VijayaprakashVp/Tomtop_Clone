const mongoose = require("mongoose");
const express = require("express");
const connect = require("./db");

const app = express();

app.use(express.json());

const SocialSavingController = require("./controllers/socialsaving.controller")

app.use("/social", SocialSavingController);



app.listen(6789, async (req, res) => {
  try {
    await connect();
    console.log("I'm listening on 6789");
  } catch (e) {
    console.log(e.message);
  }
});
