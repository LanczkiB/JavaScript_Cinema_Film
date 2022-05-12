//az osszes film cimet kilistazza

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const FilmModel = objectrepository.FilmModel;

        FilmModel.find({}).populate('_moz').exec(function (err, results) {
            if (err) {
                return next(new Error('Error getting tasks'));
            }
            
            res.locals.filmek = results;
            return next();
        });
    };
};