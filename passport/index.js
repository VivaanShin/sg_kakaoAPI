const kakao = require('./kakaoStrategy');
var session = require('express-session');
var flash = require('connect-flash');

module.exports = (passport) => {
    passport.serializeUser((user, done) => {
        console.log("passport serializeUser");
        console.log(user);
        done(null, user.id);
    });

    passport.deserializeUser((id, done) => {
        console.log("passport deserializeUser");
        User.findOne({ where: { id }

        }).then(user => done(null, user)).catch(err => done(err));
    });

    kakao(passport);
};
