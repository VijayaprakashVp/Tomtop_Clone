const mongoose = require("mongoose");
const express = require("express");
const connect = require("./db");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const SocialSavingController = require("./controllers/socialsaving.controller");
const HotdealsController = require("./controllers/hotdeals.controller");
const ProductsController = require("./controllers/products.controller");
const SignupController = require("./controllers/signup.controller");
const SigninController = require("./controllers/signin.controller");

app.use("/socials", SocialSavingController);
app.use("/hotdeals", HotdealsController);
app.use("/products", ProductsController);
app.use("/signup", SignupController);
app.use("/signin", SigninController);

app.listen(6789, async (req, res) => {
  try {
    await connect();
    console.log("I'm listening on 6789");
  } catch (e) {
    console.log(e.message);
  }
});
