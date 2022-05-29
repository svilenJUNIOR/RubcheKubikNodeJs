var router = require("express").Router();
var cubeValidator = require("../Validator/CubeValidator")
var fs = require("fs/promises")
var dataBase = require("../DataBase.json");

router.get("/create", (request, response) => {
    response.render("create")
});

router.post("/create", (request, response) => {
   var check = cubeValidator.ValidateCube(request);

   if (!check) return response.status(400).send("Invalid request!")
   else 
   {
       var cube = request.body;
       dataBase.push(cube);

       fs.writeFile("../DataBase.json", JSON.stringify(dataBase))
       .then(() => {
           response.redirect("/")
       })
       .catch(error => {
           response.status(400).send(error);
       });
   }

});

router.get("/details", (request, response) => {
    response.render("details")
});


module.exports = router;