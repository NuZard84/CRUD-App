const express = require("express");
const session = require("express-session");
const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require("./server/database/connection");
const config = require("./config");
const passport = require("passport");
const { Router } = require("express");
require("./server/authentication/passport");

const app = express();
const PORT = config.SERV_PORT;

app.set("trust proxy", 1); // trust first proxy
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: true,
  })
);

//log-reqs...
app.use(morgan("tiny"));

//connect Database..
connectDB();

//pass req to body-parser...
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine...
app.set("view engine", "ejs");

//passport-setup..
app.use(passport.initialize());
app.use(passport.session());

console.log("hello");
/* app.set("views",path.resolve(__dirname,"view/ejs")) //for instance ejs file is located separate folder.. */

//load assets...
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

app.use("/", require("./server/routes/routes"));
app.use("/auth", require("./server/routes/auth-routes"));

app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}/add-user`)
);
