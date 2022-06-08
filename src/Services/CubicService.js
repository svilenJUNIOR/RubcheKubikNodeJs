var fs = require("fs/promises")
var path = require("path");

var dataBase = require("../DataBase.json");

exports.GetCubeDetails = (Id) => dataBase[Id]

exports.AddNewCube = (request, response) => {
    var cube = request.body;
    dataBase.push(cube);

    fs.writeFile(path.resolve("src", "DataBase.json"), JSON.stringify(dataBase, "", 4))
    .then(() => {
        response.redirect("/")
    })
    .catch(error => {
        response.status(400).send(error);
    });
};
// not implemented
exports.GetSearchResult = (request, response) => {
    var cube = cubeService.GetSearchResult(Name => Name == request.body.search);
    console.log(cube);
}