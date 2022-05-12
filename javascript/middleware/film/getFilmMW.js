//egy film adatait jeleniti meg

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const FilmModel = objectrepository.FilmModel;
        FilmModel.findOne({ _id: req.params.filmid }, (err, film) => {
            if (err || !film) {
                return next(err);
            }
            
            res.locals.film = film
            return next();
        });
    };
};