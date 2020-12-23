const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy

module.exports=(passport)=>{
    passport.use(new KakaoStrategy({
    clientID : 'cdb9619875c94bd69dd7754a6d303642',
    callbackURL : "https://yj-kakao-api.run.goorm.io/oauth/callback"
  }, async (accessToken, refreshToken, profile, done) => {
    // 사용자의 정보는 profile에 들어있다.
    try {
        const exUser = await User.findOne({where: {snsId: profile.id, provider: 'kakao'}});
        if (exUser) {
            done(null, exUser);
        } else {
            const newUser = await User.create({
                email: profile._json && profile._json.kaccount_email,
                nick: profile.displayName,
                snsId: profile.id,
                provider: 'kakao',
            })
            done(null, newUser);
        }
    } catch (error) {
        console.error(error);
        done(error);
    }
  }
))
                           }