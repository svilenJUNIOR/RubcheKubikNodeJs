var express = require("express")
var router = express.Router();

var homeControler = require("../Controllers/HomeController")

router.get("/", homeControler.index);
router.get("/details", homeControler.details);
router.get("/create", homeControler.create);
router.get("/about", homeControler.about);

module.exports = router;