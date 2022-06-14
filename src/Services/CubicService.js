var Cube = require("../../Data/Models/Cube");

exports.GetById = (Id) => Cube.findById(Id);
exports.AddNewCube = (toCreate, response) => Cube.create(toCreate)
exports.getAll = async () => Cube.find().lean();
exports.Edit = (Id, Data) => Cube.findByIdAndUpdate(Id, Data);
exports.Delete = (Id) => Cube.findByIdAndRemove(Id);