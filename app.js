var express = require("express")
var handlebars = require("express-handlebars")
var router = require("./src/Routers/Router")
var app = express();

app.engine("handlebars", handlebars.engine());

app.set("view engine", "handlebars");
app.set("views","Resources/Views")

app.use(express.static("Resources"))
app.use(express.urlencoded({extended: false}));
app.use(router)

app.listen(5000);