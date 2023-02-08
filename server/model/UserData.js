const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },

  email: {
    type: String,
    require: true,
    unique: true,
    lowercase: true,
  },

  // password: {
  //   type: String,
  //   require: true,
  //   minLength: 8,
  // },

  // phonNo: {
  //   type: Number,
  //   require: true,
  //   min: 10,
  // },

  // birthday: {
  //   type: Date,
  //   require: true,
  // },

  gender: String,
  status: String,
});

const userDB = mongoose.model("userdb", schema);

module.exports = userDB;
