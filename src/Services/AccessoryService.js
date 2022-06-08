var accessory = require("../../Data/Models/Accessory")

exports.AddNewAccessory = (request, response) => accessory.create(request.body);
exports.GetAll = async() => await accessory.find().lean();