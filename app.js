var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var passport = require('passport');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var logoutRouter = require('./routes/logout');
var unlinkRouter = require('./routes/unlink');
var oauthRouter = require('./routes/oauth');
var kauthRouter = require('./routes/kauth');
var channelRouter = require('./routes/channel');
var socialRouter = require('./routes/social');
var storyRouter = require('./routes/story');
var searchRouter = require('./routes/search');
var translationRouter = require('./routes/translation');
var visionRouter = require('./routes/vision');
var multerRouter = require('./routes/multer');
var poseRouter = require('./routes/pose');
var voiceRouter = require('./routes/voice');
var localRouter = require('./routes/local');
var mapRouter = require('./routes/map');


const dotenv = require('dotenv').config();
var passportConfig = require('./passport');
var flash = require('flash');

passportConfig(passport);

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({
    resave: false,
    saveUninitialized:false,
    secret: process.env.COOKIE_SECRET,
    cookie:{
        httpOnly: true,
        secure: false,
    },
}));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/unlink', unlinkRouter);
app.use('/oauth', oauthRouter);
app.use('/kauth', kauthRouter);
app.use('/channel', channelRouter);
app.use('/social', socialRouter);
app.use('/story', storyRouter);
app.use('/search', searchRouter);
app.use('/translation', translationRouter);
app.use('/vision', visionRouter);
app.use('/multer', multerRouter);
app.use('/pose', poseRouter);
app.use('/voice', voiceRouter);
app.use('/local', localRouter);
app.use('/map', mapRouter);


app.use(passport.initialize());
app.use(passport.session());
app.use(flash());


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
  res.render('error');
});

module.exports = app;
