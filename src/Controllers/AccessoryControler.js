var router = require("express").Router();

router.get("/create", (request, response) => response.render("createAccessory"));

// add id
router.get("/attach", (request, response) => response.render("attachAccessory"));

module.exports = router;