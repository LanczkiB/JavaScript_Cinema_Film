var expect = require("chai").expect;
var saveFilmMW = require("../../../../middleware/film/saveFilmMW");
describe("saveFilmMW middleware ", function () {
    it("should set res.locals.film with a film", function (done) {
        const mv = saveFilmMW({
            FilmModel: 'meh'
        });

        mv({
            body: {
                title: 'cim',
                year: '2001',
                agelimit: '12',
                director: 'Jancsi',
                actors: 'Jazmin',
                description: 'leiras',
                time: '2',
                mozi: 'moziid'
            },
            params: {
                filmid: '13'
            }

        },
            {
                locals: {
                    mozi: {
                        _id: 'moziid'
                    },
                    film: {
                        save: (cb) => {
                            cb(null);
                        }
                    }
                },
                
                redirect: (where) => {
                    expect(where).to.be.equal('/mozi/moziid/films');
                    done();
                }
            },
            err => {
               
            });
    });
    it("should call next with err if there is a db error", function (done) {
        const mv = saveFilmMW({
            FilmModel: 'meh'
        });

        mv({
            body: {
                title: 'cim',
                year: '2001',
                agelimit: '12',
                director: 'Jancsi',
                actors: 'Jazmin',
                description: 'leiras',
                time: '2',
                mozi: 'moziid'
            },
            params: {
                filmid: '13'
            }

        },
            {
                locals: {
                    mozi: {
                        _id: 'moziid'
                    },
                    film: {
                        save: (cb) => {
                            cb('adatbazishiba');
                        }
                    }
                },

                redirect: (where) => {
                    
                }
            },
            err => {
                expect(err).to.be.equal('adatbazishiba');
                done();
            });
    });
    it("should call next with num err on year param", function (done) {
        const mv = saveFilmMW({
            FilmModel: 'meh'
        });

        mv({
            body: {
                title: 'cim',
                year: 'asdasd',
                agelimit: '12',
                director: 'Jancsi',
                actors: 'Jazmin',
                description: 'leiras',
                time: '2',
                mozi: 'moziid'
            },
            params: {
                filmid: '13'
            }

        },
            {
                locals: {
                    mozi: {
                        _id: 'moziid'
                    },
                    film: {
                        save: (cb) => {
                            cb(null);
                        }
                    }
                },

                redirect: (where) => {

                }
            },
            err => {
                expect(err).to.be.instanceof(Error);
                expect(err.toString()).to.be.eql('Error: Az ev szammal legyen megadva!');
                done();
            });
    });
    it("should set res.locals.film with a film created by the MW", function (done) {
        class FilmMockModell {
            save(cb) {
                cb(null);
            }

        };
        const mv = saveFilmMW({
            FilmModel: FilmMockModell
        });

        mv({
            body: {
                title: 'cim',
                year: '1903',
                agelimit: '12',
                director: 'Jancsi',
                actors: 'Jazmin',
                description: 'leiras',
                time: '2',
                mozi: 'moziid'
            },
            params: {
                filmid: '13'
            }

        },
            {
                locals: {
                    mozi: {
                        _id: 'moziid'
                    }
                },

                redirect: (where) => {
                    expect(where).to.be.eql('/mozi/moziid/films');
                    done();
                }
            },
            err => {
                expect(err).to.be.instanceof(Error);
                expect(err.toString()).to.be.eql('Error: Az ev szammal legyen megadva!');
                done();
            });
    });
    it("should set res.locals.film with an undefined because of title is undefined", function (done) {
        const mv = saveFilmMW({
            FilmModel: 'meh'
        });

        const resMock = {
            locals: {

            mozi: {
                _id: 'moziid'
            }            }
        };

        mv({
            body: {
                title: undefined,
                year: '2001',
                agelimit: '12',
                director: 'Jancsi',
                actors: 'Jazmin',
                description: 'leiras',
                time: '2',
                mozi: 'moziid'
            },
            params: {
                filmid: '13'
            }

        },
            {
                resMock,

                redirect: (where) => {
                    
                    
                }
            },
            err => {
                expect(resMock.locals.film).to.be.an('undefined');
                done();
            });
    });
    it("should set res.locals.film with an undefined because of year is undefined", function (done) {
        const mv = saveFilmMW({
            FilmModel: 'meh'
        });

        const resMock = {
            locals: {

            mozi: {
                _id: 'moziid'
            }            }
        };

        mv({
            body: {
                title: 'cim',
                year: undefined,
                agelimit: '12',
                director: 'Jancsi',
                actors: 'Jazmin',
                description: 'leiras',
                time: '2',
                mozi: 'moziid'
            },
            params: {
                filmid: '13'
            }

        },
            {
                resMock,
                redirect: (where) => {
                }
            },
            err => {
                expect(resMock.locals.film).to.be.an('undefined');
                done();
            });
    });
    it("should set res.locals.film with an undefined because of agelimit is undefined", function (done) {
        const mv = saveFilmMW({
            FilmModel: 'meh'
        });

        const resMock = {
            locals: {

            mozi: {
                _id: 'moziid'
            }            }
        };

        mv({
            body: {
                title: 'cim',
                year: '2001',
                agelimit: undefined,
                director: 'Jancsi',
                actors: 'Jazmin',
                description: 'leiras',
                time: '2',
                mozi: 'moziid'
            },
            params: {
                filmid: '13'
            }

        },
            {
                resMock,

                redirect: (where) => {


                }
            },
            err => {
                expect(resMock.locals.film).to.be.an('undefined');
                done();
            });
    });
    it("should set res.locals.film with an undefined because of director is undefined", function (done) {
        const mv = saveFilmMW({
            FilmModel: 'meh'
        });

        const resMock = {
            locals: {

            mozi: {
                _id: 'moziid'
            }            }
        };

        mv({
            body: {
                title: 'cim',
                year: '2001',
                agelimit: '12',
                director: undefined,
                actors: 'Jazmin',
                description: 'leiras',
                time: '2',
                mozi: 'moziid'
            },
            params: {
                filmid: '13'
            }

        },
            {
                resMock,

                redirect: (where) => {


                }
            },
            err => {
                expect(resMock.locals.film).to.be.an('undefined');
                done();
            });
    });
    it("should set res.locals.film with an undefined because of actors is undefined", function (done) {
        const mv = saveFilmMW({
            FilmModel: 'meh'
        });

        const resMock = {
            locals: {

            mozi: {
                _id: 'moziid'
            }            }
        };

        mv({
            body: {
                title: 'cim',
                year: '2001',
                agelimit: '12',
                director: 'Jancsi',
                actors: undefined,
                description: 'leiras',
                time: '2',
                mozi: 'moziid'
            },
            params: {
                filmid: '13'
            }

        },
            {
                resMock,

                redirect: (where) => {


                }
            },
            err => {
                expect(resMock.locals.film).to.be.an('undefined');
                done();
            });
    });
});