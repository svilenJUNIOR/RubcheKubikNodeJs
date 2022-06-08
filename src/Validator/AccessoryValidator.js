exports.ValidateAccessory= (request) => {
    var name = request.body.name;
    var description = request.body.description;
    var pictureUrl = request.body.imageUrl;

    console.log(name)
    console.log(description)
    console.log(pictureUrl)
    if (!name || !description || !pictureUrl) return false;

    else return true;
}