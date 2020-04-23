const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

let PORT = process.env.PORT || 8080;


var app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

const routes = require("./controllers/burgers_controller");
app.use(routes);

app.listen(PORT, function(){
    console.log("Server listening at localhost:" + PORT);
});
