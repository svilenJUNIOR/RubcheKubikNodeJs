var router = require("express").Router();

var homeControler = require("../Controllers/HomeController")
var cubicController = require("../Controllers/CubicController")

router.use("/", homeControler);
router.use("/cubic", cubicController);

module.exports = router;