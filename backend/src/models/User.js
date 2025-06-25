import mongoose from "mongoose";
import bcrypt from "bcryptjs";

// 1 - create a schema
const userSchema = new mongoose.Schema(
  {
    fname: {
      type: String,
      required: true,
    },
    lname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    pwd: {
      type: String,
      required: true,
    },
    usrtype: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("pwd")) return next();
  this.pwd = bcrypt.hash(this.pwd, 10);
  next();
});

// 2 - create a model based off of that schema
const User = mongoose.model("User", userSchema);

export default User;
