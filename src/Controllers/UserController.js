var router = require("express").Router();
var engine = require("../Services/Engine");

router.get("/register", (request, response) => response.render("User/register"));
router.get("/login", (request, response) => response.render("User/login"));

router.post("/register", (request, response) => engine.UserRegister(request, response));
router.post("/login", (request,response) => engine.UserLogin(request, response));

module.exports = router;