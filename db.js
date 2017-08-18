var mongoose = require('mongoose');

mongoose.connect('mongodb://admin:1234@ds151433.mlab.com:51433/flights');

module.exports = mongoose.connection;