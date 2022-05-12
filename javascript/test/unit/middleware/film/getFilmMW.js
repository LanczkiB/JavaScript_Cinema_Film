var expect = require("chai").expect;
var getFilmMW = require("../../../../middleware/film/getFilmMW");
describe("getFilmMW middleware ", function () {
    it("should set res.locals.film with a film object from db", function (done) {
        const mv = getFilmMW({
            FilmModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '13' });
                    cb(null,'mockfilm');
                }
            }
        });
        const resMock = {
            locals: {}
        };

        mv({
            params: {
                filmid: '13'
            }

        },
            resMock,
            (err) => {
                expect(err).to.be.equal(undefined);
            expect(resMock.locals).to.be.eql({ film: 'mockfilm' });
            done();
        });
    });
    it("should call next with error when there is a db problem", function (done) {
        const mv = getFilmMW({
            FilmModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '13' });
                    cb('adatbazishiba', null);
                }
            }
        });
        const resMock = {
            locals: {}
        };

        mv({
            params: {
                filmid: '13'
            }

        },
            resMock,
            (err) => {
                expect(err).to.be.eql('adatbazishiba');
                done();
            });
    });
    it("should call next when no film found in the db", function (done) {
        const mv = getFilmMW({
            FilmModel: {
                findOne: (p1, cb) => {
                    expect(p1).to.be.eql({ _id: '13' });
                    cb(undefined,null);
                }
            }
        });
        const resMock = {
            locals: {}
        };

        mv({
            params: {
                filmid: '13'
            }

        },
            resMock,
            (err) => {
                expect(err).to.be.equal(undefined);
                expect(resMock.locals).to.be.eql({});
                done();
            });
    });
});