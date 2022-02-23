// Sign Up Model
const mongoose = require("mongoose");

const signupSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // confirm_password: { type: String, required: true },
    cart: [],
  },
  {
    versionKey: false,
    timestamps: true,
  },
);

const Signup = new mongoose.model("signup", signupSchema);

module.exports = Signup;
