const bodyParser = require('body-parser');
const express = require('express');
const app = express();
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
//app.use(express.static('static'));
require('./route/index')(app);

app.listen(3000, function () {
    console.log('Hello :3000');
});
/*
const MoziModel = require('./models/mozi');
let egyMozi = new MoziModel();
egyMozi.name = "kkjh";
egyMozi.location = "hh";
egyMozi.year = 2000;
egyMozi.phone = "kjj";
egyMozi.capacity = 2;
egyMozi.film = "j";
egyMozi.save((err) => {
    console.log(err);
});*/


