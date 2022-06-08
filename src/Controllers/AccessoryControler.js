var accessoryService = require("../Services/AccessoryService");
var accessoryValidator = require("../Validator/AccessoryValidator")

var router = require("express").Router();

router.get("/create", (request, response) => response.render("createAccessory"));

router.post("/create", (request, response) => {
    var check = accessoryValidator.ValidateAccessory(request);

    if (!check) return response.status(400).send("Invalid request!")

    else {
        accessoryService.AddNewAccessory(request, response);
        response.redirect("/");
    }
});

// add id
router.get("/attach", (request, response) => response.render("attachAccessory"));

module.exports = router;