var router = require("express").Router();
var cubeValidator = require("../Validator/CubeValidator")
var cubeService = require("../Services/CubicService");
var accessoryService = require("../Services/AccessoryService");

router.get("/create", (request, response) => response.render("create"));

router.post("/create", (request, response) => {
    var check = cubeValidator.ValidateCube(request);

    if (!check) return response.status(400).send("Invalid request!")
    else {
        cubeService.AddNewCube(request, response);
        response.redirect("/");
    }
});

router.get("/details/:Id", async (request, response) => {
    var cube = await cubeService.GetById(request.params.Id).lean().populate("accessories");
    response.render("details", { cube });
});
// not implemented
router.get("/search", (request, response) => {
    var cubes = cubeService.GetSearchResult(request, response)

    response.render("index", { cubes })
})

router.get("/attach/:Id", async (request, response) => {
    var cube = await cubeService.GetById(request.params.Id).lean();
    var accessories = await accessoryService.GetAll();

    response.render("attach", { cube, accessories });
});

router.post("/attach/:Id", async (request, response) => {
    var accessoryId = request.body.accessory;
    var cubeId = request.params.Id;

    var cube = await cubeService.GetById(cubeId);
    var accessory = await accessoryService.GetById(accessoryId);

    await cube.accessories.push(accessory);
    await cube.save();

    response.redirect("/")
});

module.exports = router;