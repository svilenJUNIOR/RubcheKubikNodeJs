var mongoose = require('mongoose');
var connectionString="mongodb://localhost:27017/softuni-cubicle";

exports.ConnectWithDataBase = () => mongoose.connect(connectionString);