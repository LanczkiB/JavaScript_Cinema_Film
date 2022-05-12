//kitorol egy mozit az adatbazisbol azonosito alapjan

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    return function (req, res, next) {
        if (typeof res.locals.mozi === 'undefined') {
            
            return next();
        }

        res.locals.mozi.remove(err => {
            if (err) {console.log(mozi.name);
                return next(err);
            }
            

            return res.redirect('/');
        });
    };
};