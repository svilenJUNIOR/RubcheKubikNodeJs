var engine = require("../Services/Engine");
var router = require("express").Router();
var accessoryService = require("../Services/AccessoryService");

router.get("/create", (request, response) => response.render("createAccessory"));

router.get("/all", async (request, response) => {
    var accessories = await accessoryService.GetAll();
    response.render("allAccessories",{ accessories });
}); 

router.post("/create", (request, response) => engine.AddAccessory(request, response));

module.exports = router;