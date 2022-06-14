var router = require("express").Router();
var cubeService = require("../Services/CubicService");
var accessoryService = require("../Services/AccessoryService");
var engine = require("../Services/Engine");

router.get("/create", (request, response) => response.render("create"));
router.get("/delete/:Id", (request, response) => response.render("deleteCubePage"));

router.get("/details/:Id", async (request, response) => {
    var cube = await cubeService.GetById(request.params.Id).lean().populate("accessories");
    response.render("details", { cube });
});

router.get("/edit/:Id", async (request, response) => {
    var cube = await cubeService.GetById(request.params.Id).lean();
    response.render("editCubePage", { cube });
}); 

router.get("/attach/:Id", async (request, response) => {
    var cube = await cubeService.GetById(request.params.Id).lean();
    var accessories = await accessoryService.GetAll();
    response.render("attach", { cube, accessories });
});

router.post("/create", (request, response) => engine.AddCube(request, response));
router.post("/attach/:Id", async (request, response) => engine.AttachAccessoryToCube(request, response));
router.post("/delete/:Id", async (request, response) => {
    await cubeService.Delete(request.params.Id)
    response.redirect("/");
});

router.post("/edit/:Id", async (request, response) => {
   await cubeService.Edit(request.params.Id, request.body);
   response.redirect('/');
});

module.exports = router;