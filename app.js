var express = require("express")
var app = express();
var cookieParser = require("cookie-parser");
var handlebars = require("express-handlebars")
var router = require("./src/Routers/Router")
var { ConnectWithDataBase } = require("./Data/DBContext/MongoDbContext")

app.engine("handlebars", handlebars.engine());

app.set("view engine", "handlebars");
app.set("views","Resources/Views")

app.use(express.static("Resources"))
app.use(cookieParser());
app.use(express.urlencoded({extended: false}));
app.use(router)

ConnectWithDataBase()
.then(() => {
    app.listen(5000)
})
.catch((error) => {
    console.log("Error " + error);
});