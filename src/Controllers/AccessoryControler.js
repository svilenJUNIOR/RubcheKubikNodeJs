var router = require("express").Router();

router.get("/create", (request, response) => response.render("createAccessory"));

module.exports = router;