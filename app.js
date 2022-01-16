const express = require("express");
const app = express();
const path = require("path");
const { compile } = require("ejs");
const bodyParser = require("body-parser");
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded());
// in latest body-parser use like below.
app.use(bodyParser.urlencoded({ extended: true }));
// app.use("/", express.static(__dirname + "/"));
app.use(express.static("public"));
app.set("view engine", "ejs");
require("./routes")(app);

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:3000`);
});
