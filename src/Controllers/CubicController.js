var router = require("express").Router();
var cubeValidator = require("../Validator/CubeValidator")
var cubeService = require("../Services/CubicService");

router.get("/create", (request, response) => response.render("create"));

router.post("/create", (request, response) => {
   var check = cubeValidator.ValidateCube(request);

   if (!check) return response.status(400).send("Invalid request!")
   else cubeService.AddNewCube(request, response);
});
// fix
router.get("/details/Id", (request, response) => {
    var cube = cubeService.GetCubeDetails(request.params.Id);

    response.render("details", {cube});
});
// not implemented
router.get("/search", (request, response) => {
    var cubes = cubeService.GetSearchResult(request, response)

    response.render("index", {cubes})
})

module.exports = router;