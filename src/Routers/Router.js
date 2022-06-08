var router = require("express").Router();

var homeControler = require("../Controllers/HomeController")
var cubicController = require("../Controllers/CubicController")
var accessoryController = require("../Controllers/AccessoryControler")

router.use("/", homeControler);
router.use("/cubic", cubicController);
router.use("/accessory", accessoryController);

module.exports = router;