var express = require("express")
var engine = express();

engine.get("/", (request, response) => {
    response.send("we all hate javascript")
});
engine.listen(5000);