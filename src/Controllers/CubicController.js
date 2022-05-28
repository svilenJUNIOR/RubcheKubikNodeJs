var router = require("express").Router();

router.get("/create", (request, response) => {
    response.render("create")
});

router.get("/details", (request, response) => {
    response.render("details")
});


module.exports = router;