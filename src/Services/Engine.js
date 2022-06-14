var { cookie } = require("../../Resources/Constants/Values")

var cubeValidator = require("../Validator/CubeValidator")
var cubeService = require("../Services/CubicService");

var accessoryValidator = require("../Validator/AccessoryValidator");
var accessoryService = require("../Services/AccessoryService");

var userValidator = require("../Validator/UserValidator")
var userService = require("../Services/UserService");

exports.AddCube = (request, response) => {
    var check = cubeValidator.ValidateCube(request.body);

    if (!check) return response.status(400).send("Invalid request!")
    else {
        cubeService.AddNewCube(request, response);
        response.redirect("/");
    }
}

exports.AttachAccessoryToCube = async (request, response) => {
    var accessoryId = request.body.accessory;
    var cubeId = request.params.Id;

    var cube = await cubeService.GetById(cubeId);
    var accessory = await accessoryService.GetById(accessoryId);

    await cube.accessories.push(accessory);
    await cube.save();

    response.redirect("/")
};

exports.AddAccessory = (request, response) => {
    var check = accessoryValidator.ValidateAccessory(request.body);

    if (!check) return response.status(400).send("Invalid request!")
    else {
        accessoryService.AddNewAccessory(request, response);
        response.redirect("/");
    }
}

exports.UserRegister = (request, response) => {
    var check = userValidator.ValidateUser(request.body);

    if (!check) return response.status(400).send("Invalid request!")
    else {
        userService.Register(request, response);
        response.redirect("/");
    }
}

exports.UserLogin = async (request, response) => {
    var check = userValidator.ValidateUser(request.body);

    if (!check) return response.status(400).send("Invalid request!")
    else {
        var token = await userService.Login(request, response);
        response.cookie(cookie, token);
        response.redirect("/");
    }
}