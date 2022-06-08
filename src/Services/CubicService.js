var fs = require("fs/promises")
var path = require("path");

var Cube = require("../../Data/Models/Cube");

exports.GetCubeDetails = (Id) => dataBase[Id]

exports.AddNewCube = (request, response) => Cube.create(request.body)


// not implemented
exports.GetSearchResult = (request, response) => {
    var cube = cubeService.GetSearchResult(Name => Name == request.body.search);
    console.log(cube);
}