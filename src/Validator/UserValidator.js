exports.ValidateRegistration = (...params) => {
    var check = true;

    if (params.includes('')) check = false;
    if (params.password !== params.repeatPassword) check = false;

    return check;
};