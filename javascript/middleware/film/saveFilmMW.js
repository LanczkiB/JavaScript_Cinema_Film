//elmenti az id alapjan kivalasztott film adatait

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const FilmModel = objectrepository.FilmModel;

    return function (req, res, next) {
        
        if (
            typeof req.body.title === 'undefined' ||
            typeof req.body.year === 'undefined' ||
            typeof req.body.agelimit === 'undefined' ||
            typeof req.body.director === 'undefined' ||
            typeof req.body.actors === 'undefined' ||
            typeof req.body.description === 'undefined' ||
            typeof req.body.time === 'undefined' ||
            typeof res.locals.mozi === 'undefined' 
        ) {
            return next();
        }
        if (typeof res.locals.film === 'undefined') {
            res.locals.film = new FilmModel();
        }
        if (Number.isNaN(parseInt(req.body.year, 10))) {
            return next(new Error("Az ev szammal legyen megadva!"));
        }
        if (Number.isNaN(parseInt(req.body.agelimit, 10))) {
            return next(new Error("A korhatár számmal legyen megadva!"));
        }
        res.locals.film.title = req.body.title;
        res.locals.film.year = req.body.year;

        res.locals.film.agelimit = req.body.agelimit;
        res.locals.film.director = req.body.director;

        res.locals.film.actors = req.body.actors;
        res.locals.film.description = req.body.description;

        res.locals.film.time = req.body.time;
        res.locals.film._moz = res.locals.mozi;

        res.locals.film.save((err) => {
            if (err) { return next(err); }
        });
        var route = res.locals.mozi._id
        return res.redirect('/mozi/'+route+'/films');
    };
};