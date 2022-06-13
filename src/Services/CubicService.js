var Cube = require("../../Data/Models/Cube");

exports.GetById = (Id) => Cube.findById(Id);
exports.AddNewCube = (request, response) => Cube.create(request.body)
exports.getAll = async () => Cube.find().lean();