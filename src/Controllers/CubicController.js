var router = require("express").Router();
var cubeService = require("../Services/CubicService");
var accessoryService = require("../Services/AccessoryService");
var engine = require("../Services/Engine");
var { IsICool , IsIOwner} = require("../Middlewares/UserMiddlewear");

router.get("/create", IsICool, (request, response) => response.render("Cube/create"));
router.get("/delete/:Id", IsIOwner, (request, response) => response.render("Cube/delete"));

router.get("/details/:Id", async (request, response) => {
    var cube = await cubeService.GetById(request.params.Id).lean().populate("accessories");
    response.render("Cube/details", { cube });
});

router.get("/edit/:Id", async (request, response) => {
    var cube = await cubeService.GetById(request.params.Id).lean();
    console.log(request.user);
    response.render("Cube/edit", { cube });
}); 

router.get("/attach/:Id", async (request, response) => {
    var cube = await cubeService.GetById(request.params.Id).lean();
    var accessories = await accessoryService.GetAll();
    response.render("Cube/attach", { cube, accessories });
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