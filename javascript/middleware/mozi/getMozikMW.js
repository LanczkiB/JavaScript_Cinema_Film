//kilistazza az osszes mozi nevet

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        const MoziModel = objectrepository.MoziModel;
        MoziModel.find({}, (err, mozik) => {
            if (err) {
                return next(err);
            }
            res.locals.mozik = mozik;
            return next();
        });
    };
};