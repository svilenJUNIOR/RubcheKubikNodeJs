var hasher = require("bcrypt");
var User = require("../../Data/Models/User");

exports.Register = async (request, response) => {
    var password = request.body.password;
    var hashedPassword = await hasher.hash(password, 10);

    var addedUser = User.create({
        username: request.body.username,
        password: hashedPassword,
    });

    return addedUser;
};