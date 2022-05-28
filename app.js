var express = require("express")
var handlebars = require("express-handlebars")

var app = express();
app.engine("handlebars", handlebars.engine());
app.set("view engine", "handlebars");
app.set("views","Resources/views")

app.get("/", (request, response) => {
    response.render("index")
});

app.get("/about", (request, response) => {
    response.render("about")
});

app.get("/create", (request, response) => {
    response.render("create")
});

app.get("/details", (request, response) => {
    response.render("details")
});
app.listen(5000);