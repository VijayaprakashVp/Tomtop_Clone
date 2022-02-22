const Signin = require("../models/SignIn.model");
const express = require("express");

const router = express.Router();

router.post("", async (req, res) => {
  try {
    const signin = await Signin.create(req.body);
    return res.status(200).send(signin);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("", async (req, res) => {
  try {
    const signin = await Signin.find().lean().exec();
    return res.status(200).send(signin);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.get("/:id", async (req, res) => {
  // console.log("req:", req.params.id);

  try {
    const signin = await Signin.findById(req.params.id);

    return res.status(200).send(signin);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.patch(":id", async (req, res) => {
  try {
    const signin = await Signin.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      },
    )
      .lean()
      .exec();
    return res.status(200).send(signin);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const signin = await Signin.findByIdAndDelete(req.params.id)
      .lean()
      .exec();
    return res.status(200).send(signin);
  } catch (e) {
    return res.status(500).send(e.message);
  }
});

module.exports = router;
