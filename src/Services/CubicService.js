var fs = require("fs/promises")
var path = require("path");

var Cube = require("../../Data/Models/Cube");

exports.GetCubeDetails = (Id) => dataBase[Id]

exports.AddNewCube = (request, response) => Cube.create(request.body)

exports.getAll = async () => {
    var cubes = await Cube.find().lean();
    return cubes;
} 