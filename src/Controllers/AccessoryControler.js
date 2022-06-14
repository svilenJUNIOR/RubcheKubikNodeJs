var engine = require("../Services/Engine");
var router = require("express").Router();
var accessoryService = require("../Services/AccessoryService");

router.get("/create", (request, response) => response.render("Accessory/create"));

router.get("/all", async (request, response) => {
    var accessories = await accessoryService.GetAll();
    response.render("Accessory/all",{ accessories });
}); 

router.post("/create", (request, response) => engine.AddAccessory(request, response));

module.exports = router;