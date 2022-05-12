//megjeleniti egy mozi adatait id alapjan

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const MoziModel = objectrepository.MoziModel;
        MoziModel.findOne({ _id: req.params.moziid }, (err, mozi) => {
            if (err || !mozi) {
                return next(err);
            }
            res.locals.mozi = mozi
            return next();
        });
    };
};