var router = require("express").Router();

var homeControler = require("../Controllers/HomeController")
var cubicController = require("../Controllers/CubicController")

router.get("/", homeControler.index);
router.get("/about", homeControler.about);
router.use("/cubic", cubicController);

module.exports = router;