var Cube = require("../../Data/Models/Cube");

exports.GetCubeDetails = (Id) => Cube.findById(Id);

exports.AddNewCube = (request, response) => Cube.create(request.body)

exports.getAll = async () => await Cube.find().lean();