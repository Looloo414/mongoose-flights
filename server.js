var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

require('dotenv').config();
require('./config/database')

var indexRouter = require('./routes/index');
var flightsRouter = require('./routes/flights');
const ticketsRouter = require('./routes/tickets')
const destinationsRouter = require('./routes/destinations')

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/flights', flightsRouter);
app.use('/', ticketsRouter)
app.use('/', destinationsRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
  });

  // error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};
  
    // render the error page
    res.status(err.status || 500);
    res.render('error', {title: 'Try looking in a different box.'});
  });
  

module.exports = app;
