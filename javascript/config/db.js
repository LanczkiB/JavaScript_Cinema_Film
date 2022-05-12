const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/v1gq2j', { useNewUrlParser: true });

module.exports = mongoose;