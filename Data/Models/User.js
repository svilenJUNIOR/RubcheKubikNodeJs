var mongoose = require("mongoose");

var UserSchema = new mongoose.Schema({
    Username:{
        type: String,
        require: true,
    },
    Password:{
        type: String,
        require: true,
    },
});

const user = mongoose.model("User", UserSchema);

module.exports = user;