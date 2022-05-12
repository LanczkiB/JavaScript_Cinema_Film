const renderMW = require('../middleware/renderMW');

const getMoziMW = require('../middleware/mozi/getMoziMW');
const getMozikMW = require('../middleware/mozi/getMozikMW');
const delMoziMW = require('../middleware/mozi/delMoziMW');
const saveMoziMW = require('../middleware/mozi/saveMoziMW');
const getFilmMoziMW = require('../middleware/film/getFilmMoziMW');

const getFilmekMW = require('../middleware/film/getFilmekMW');
const getFilmMW = require('../middleware/film/getFilmMW');
const saveFilmMW = require('../middleware/film/saveFilmMW');
const delFilmMW = require('../middleware/film/delFilmMW');

const FilmModel = require('../models/film');
const MoziModel = require('../models/mozi');

module.exports = function (app) {
    const objRepo = {
        FilmModel: FilmModel,
        MoziModel: MoziModel,
    };

    app.use('/mozi/:moziid/films/:filmid/delete',
        getMoziMW(objRepo),

        getFilmMW(objRepo),
        delFilmMW(objRepo),
        renderMW(objRepo, 'index'));

    app.use('/mozi/:moziid/films/:filmid/edit',
        getFilmMW(objRepo),
        getMoziMW(objRepo),
        saveFilmMW(objRepo),
        renderMW(objRepo, 'EditFilm'));

    app.use('/mozi/:moziid/films/add',
        getMoziMW(objRepo),
        saveFilmMW(objRepo),
        renderMW(objRepo, 'AddFilm'));

    app.get('/mozi/:moziid/film/:filmid',
        getMoziMW(objRepo),
        getFilmMW(objRepo),
        renderMW(objRepo, 'JojoRabbit'));

    app.get('/mozi/:moziid/films',
        getMoziMW(objRepo),
        getFilmMoziMW(objRepo),
        renderMW(objRepo, 'Films'));

    app.get('/mozi/:moziid/edit/delete',
        getMoziMW(objRepo),
        delMoziMW(objRepo),
        renderMW(objRepo, 'index'));

    app.use('/mozi/:moziid/edit',
        getMoziMW(objRepo),
        saveMoziMW(objRepo),
        renderMW(objRepo, 'EditCinema'));

    app.get('/mozi/:moziid',
        getMoziMW(objRepo),
        renderMW(objRepo, 'CinemaCity'));

    app.use('/add',
        saveMoziMW(objRepo),
        renderMW(objRepo, 'NewCinema'));


    app.get('/',
        getMozikMW(objRepo),
        renderMW(objRepo, 'index'));
}