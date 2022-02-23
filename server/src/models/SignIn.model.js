// Sign In Model
const mongoose = require("mongoose");

const signinSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Signin = new mongoose.model("signin", signinSchema);

module.exports = Signin;
