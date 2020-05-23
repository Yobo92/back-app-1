var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

let mongoServer = 'mongodb+srv://admin:Yobo1234@cluster0-wl3gs.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(mongoServer, {useNewUrlParser: true, useUnifiedTopology:true}).then(
    () => {console.log('Connected to DB')},
    err => {console.log(err)}
)

var indexRouter = require('./routes/index');
var items = require('./routes/items');

var app = express();


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/items', items);

module.exports = app;
