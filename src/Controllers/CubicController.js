var router = require("express").Router();
var cubeValidator = require("../Validator/CubeValidator")
var cubeService = require("../Services/CubicService")

router.get("/create", (request, response) => {
    response.render("create")
});

router.post("/create", (request, response) => {
   var check = cubeValidator.ValidateCube(request);

   if (!check) return response.status(400).send("Invalid request!")
   else cubeService.AddNewCube(request, response);

});

router.get("/details", (request, response) => {
    response.render("details")
});


module.exports = router;