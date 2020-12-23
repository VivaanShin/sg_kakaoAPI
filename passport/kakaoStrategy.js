const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy

module.exports=(passport)=>{
    passport.use(new KakaoStrategy({
    clientID : process.env.KAKAO_ID,
    callbackURL : "./kakao/callback"
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