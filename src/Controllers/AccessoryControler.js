var accessoryService = require("../Services/AccessoryService");
var accessoryValidator = require("../Validator/AccessoryValidator")
var cubeService = require("../Services/CubicService");

var router = require("express").Router();

router.get("/all", async (request, response) => {
    var accessories = await accessoryService.GetAll();

    response.render("allAccessories", {accessories});
});

router.get("/create", (request, response) => response.render("createAccessory"));

router.post("/create", (request, response) => {
    var check = accessoryValidator.ValidateAccessory(request);

    if (!check) return response.status(400).send("Invalid request!")

    else {
        accessoryService.AddNewAccessory(request, response);
        response.redirect("/");
    }
});

router.get("/attach/:Id", async (request, response) => {
    var cube = await cubeService.GetById(request.params.Id).lean();
    var accessories = await accessoryService.GetAll();

    response.render("attach", { cube, accessories });
});

module.exports = router;