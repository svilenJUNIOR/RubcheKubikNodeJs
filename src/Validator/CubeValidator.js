exports.ValidateCube = (request) => {
    var name = request.body.name;
    var description = request.body.description;
    var imgUrl = request.body.imageUrl;
    var difLevel = parseInt(request.body.difficultyLevel);
    
    if (!name || !description || !imgUrl || !difLevel || typeof difLevel !== "number" )
    return false; 
    
    else 
    return true
}