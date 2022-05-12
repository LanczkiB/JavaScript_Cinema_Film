//elmenti a kivalasztott mozi adatait

const requireOption = require('../requireOption');

module.exports = function (objectrepository) {
    const MoziModel = objectrepository.MoziModel;
    return function (req, res, next) {
        
        if (
            typeof req.body.name === 'undefined' ||
            typeof req.body.location === 'undefined' ||
            typeof req.body.year === 'undefined' ||
            typeof req.body.phone === 'undefined' ||
            typeof req.body.capacity === 'undefined'
            //typeof req.body.film === 'undefined' 
        ) {
            
            return next();
        }

        if (typeof res.locals.mozi === 'undefined') {
            res.locals.mozi = new MoziModel();
        }
        
        res.locals.mozi.name = req.body.name;
        res.locals.mozi.location = req.body.location;
        res.locals.mozi.year = req.body.year;
        res.locals.mozi.phone = req.body.phone;
        res.locals.mozi.capacity = req.body.capacity;
        res.locals.mozi.film = req.body.film;
        res.locals.mozi.save((err) => {
            if (err) { return next(err); }
        });
        return res.redirect('/');
    };
};