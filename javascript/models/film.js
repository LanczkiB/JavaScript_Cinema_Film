const Schema = require('mongoose').Schema;
const db = require('../config/db');

const Film = db.model('Film', {
    title: String,
    year: Number,
    agelimit: Number,
    director: String,
    actors: String,
    description: String,
    time: Number,
    _moz: {
        type: Schema.Types.ObjectId,
        ref: 'Mozi'
    }

});

module.exports = Film;