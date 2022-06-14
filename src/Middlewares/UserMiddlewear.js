var { cookie, secret} = require("../../Resources/Constants/Values")
var jwt = require("jsonwebtoken");
var {promisify} = require("util");

var jwtVerify = promisify(jwt.verify);

exports.Verify = async (request, response, next) => {
    let token = request.cookies[cookie];

    if (token){
        try{
            let decodedToken = await jwtVerify(token, secret);

            request.user = decodedToken;
        }
        catch(error){
            return response.redirect("/");
        }
    }
    next();
}