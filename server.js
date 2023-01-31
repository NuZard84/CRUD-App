const express = require("express");

const morgan = require("morgan");
const bodyparser = require("body-parser");
const path = require("path");
const connectDB = require('./server/database/connection');
const config = require('./config');



const app = express();
const PORT = config.SERV_PORT;


//log-reqs...
app.use(morgan("tiny"));

//connect Database..
connectDB();

//pass req to body-parser...
app.use(bodyparser.urlencoded({ extended: true }));

//set view engine...
app.set("view engine", "ejs");

/* app.set("views",path.resolve(__dirname,"view/ejs")) //for instance ejs file is located separate folder.. */

//load assets...
app.use("/css", express.static(path.resolve(__dirname, "assets/css")));
app.use("/js", express.static(path.resolve(__dirname, "assets/js")));
app.use("/img", express.static(path.resolve(__dirname, "assets/img")));

app.use('/', require('./server/routes/routes'));


app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
