const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;
const jwt = require("jsonwebtoken");

// const config = require('config')

// const { ObjectId } = mongoose.Schema.Types

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
  },
  //   firstName: {
  //   type: String,

  // },
  // lastName: {
  //   type: String,

  // },

  //   profilePhoto: {
  //     type: String,
  //   },

  links: [{ type: ObjectId, ref: "Link" }],
});

UserSchema.methods.generateJWT = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.jwtPrivateKey
  );
};

const User = mongoose.model("User", UserSchema);

module.exports = User;
