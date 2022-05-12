const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Mozi = db.model('Mozi', {
    name: String,
    location: String,
    year: Number,
    phone: String,
    capacity: Number
});

module.exports = Mozi;