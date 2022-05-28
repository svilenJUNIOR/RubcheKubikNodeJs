var cubes = require("../DataBase.json");

exports.index = (request, response) => {
    response.render("index", {cubes})

};

exports.about = (request, response) => {
    response.render("about")
};