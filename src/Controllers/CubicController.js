var router = require("express").Router();

router.get("/create", (request, response) => {
    response.render("create")
});

router.get("/details", (request, response) => {
    response.render("details")
});

router.get("/about", (request, response) => {
    response.render("about")
});

module.exports = router;