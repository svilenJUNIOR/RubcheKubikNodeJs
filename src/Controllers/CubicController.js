var router = require("express").Router();
var cubeValidator = require("../Validator/CubeValidator")
var cubeService = require("../Services/CubicService");

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
    var cube = await cubeService.GetById(request.params.Id).lean();
    
    response.render("details", { cube });
});
// not implemented
router.get("/search", (request, response) => {
    var cubes = cubeService.GetSearchResult(request, response)

    response.render("index", { cubes })
})

module.exports = router;