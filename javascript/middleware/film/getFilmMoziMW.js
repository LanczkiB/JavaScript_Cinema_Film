//a mozihoz tartozó filmek listázása

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const FilmModel = objectrepository.FilmModel;
        let query = {};
        query._moz = res.locals.mozi;
        
        FilmModel.find(query).populate('_moz').exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting tasks'));
            }
            res.locals.filmek = results;
            return next();
        });
    };
};