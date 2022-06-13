var hasher = require("bcrypt");
var User = require("../../Data/Models/User");

exports.Register = (request, response) => {
    var password = request.body.password;
    var hashedPassword = hasher.hash(password, 10);

    var addedUser = User.create({
        username: request.body.username,
        password: hashedPassword,
    });

    response.redirect("/");
};