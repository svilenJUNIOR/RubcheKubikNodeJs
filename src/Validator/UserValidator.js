exports.ValidateRegistration = (request) => {
    var username = request.body.username;
    var password = request.body.username;
    var repeatPassword = request.body.username;

    if (!username || !password || !repeatPassword || password !== repeatPassword)
        return false;

    else
        return true;
};