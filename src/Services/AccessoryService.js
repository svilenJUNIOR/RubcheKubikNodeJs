var accessory = require("../../Data/Models/Accessory")

exports.AddNewAccessory = (request, response) => accessory.create(request.body);