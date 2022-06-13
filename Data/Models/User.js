var mongoose = require("mongoose");

var user = new mongoose.Schema({
    Username:{
        type: String,
        require: true,
    },
    Password:{
        type: String,
        require: true,
    },
});

const user = mongoose.model("User");

module.exports = user;