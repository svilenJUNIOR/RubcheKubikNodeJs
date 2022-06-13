var accessoryService = require("../Services/AccessoryService");
var accessoryValidator = require("../Validator/AccessoryValidator")

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


module.exports = router;