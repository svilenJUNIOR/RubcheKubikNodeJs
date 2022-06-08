var cubes = require("../DataBase.json");
const router = require("./CubicController");

router.get("/", (request, response) => response.render("index", { cubes }));

router.get("/about", (request, response) => response.render("about"));

module.exports = router;