const express = require("express");
const route = express.Router();
const passport = require("passport");
require("./../authentication/passport");

route.get(
  "/google",
  passport.authenticate("google", {
    scope: ["email", "profile"],
  }),
  () => console.log("server")
);

module.exports = route;
