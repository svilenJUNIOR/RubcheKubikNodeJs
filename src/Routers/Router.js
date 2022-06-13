var router = require("express").Router();

var homeControler = require("../Controllers/HomeController")
var cubicController = require("../Controllers/CubicController")
var accessoryController = require("../Controllers/AccessoryControler")
var userController = require("../Controllers/UserController")

router.use("/", homeControler);
router.use("/cubic", cubicController);
router.use("/accessory", accessoryController);
router.use("/user", userController);

module.exports = router;