var router = require("./CubicController");
var cubeService = require("../Services/CubicService")

router.get("/", async (request, response) => {
    
    var cubes = await cubeService.getAll();

    response.render("index", { cubes });
});

router.get("/about", (request, response) => response.render("about"));

module.exports = router;