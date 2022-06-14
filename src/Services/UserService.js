var hasher = require("bcrypt");
var jwt = require("jsonwebtoken");
var User = require("../../Data/Models/User");
var { secret } = require("../../Resources/Constants/Values")

exports.Register = async (request, response) => {
    var password = request.body.password;
    var hashedPassword = await hasher.hash(password, 10);

    var addedUser = User.create({
        username: request.body.username,
        password: hashedPassword,
    });

    return addedUser;
};

exports.Login = async (request, response) => {
    var username = request.body.username;
    var user = await User.findOne({username});
    
    var doesMatch = hasher.compare(request.body.password, user.password);

    if (!user) return;
    if (!doesMatch) return;

    let result = new Promise((resolve, reject) => {
        jwt.sign({_id: user._id, username: user.username}, secret, {expiresIn: "1d"}, (err, token) => {
            if (err) return reject(err);
            else resolve (token);
        });
    });

   return result;
}