exports.ValidateAccessory = (...params) => {
    var check = true;
    if (params.includes('')) check = false;
    return check;
}