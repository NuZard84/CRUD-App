const express = require("express");
const route = express.Router();
const services = require("../service/render");
const controller = require("../controller/operations");
const passport = require("passport");

route.get("/dashboard", passport.authenticate("google"), services.dashboard);

route.get("/add-user", services.add_user);

route.get("/update-user", services.update_user);

route.get("/login", services.login);

route.post("/api/user", controller.create);
route.get("/api/user", controller.find);
route.put("/api/user/:id", controller.update);
route.delete("/api/user/:id", controller.delete);

module.exports = route;
