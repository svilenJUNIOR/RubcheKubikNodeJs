var router = require("express").Router();
var userService = require("../Services/UserService");
var userValidator = require("../Validator/UserValidator")

router.get("/register", (request, response) => response.render("registerPage"));

router.post("/register", (request, response) => {
    var check = userValidator.ValidateRegistration(request);

    if (!check) return response.status(400).send("Invalid request!")
    else {
        userService.Register(request, response);
        response.redirect("/");
    }
});

router.get("/login", (request, response) => {
    response.render("loginPage");
})

module.exports = router;