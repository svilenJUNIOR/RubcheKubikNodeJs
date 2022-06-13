var router = require("express").Router();

router.get("/register", (request, response) => {
    response.render("registerPage");
})

router.get("/login", (request, response) => {
    response.render("loginPage");
})

module.exports = router;