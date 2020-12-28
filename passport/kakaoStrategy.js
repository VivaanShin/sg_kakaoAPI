var session = require('express-session');
var flash = require('connect-flash');
const passport = require('passport')
const KakaoStrategy = require('passport-kakao').Strategy

module.exports=(passport)=>{
    passport.use(
        //이 부분 추가한 것
        new KakaoStrategy({
    clientID : process.env.KAKAO_ID,
    callbackURL : "https://yj-kakao-api.run.goorm.io/oauth/kakao/callback"
  }, async (accessToken, refreshToken, profile, done) => {
            console.log("여긴 되나")
            try{
                console.log("뭐가문제야",accessToken, refreshToken, profile)
                done(null, accessToken, profile);
                
            } catch(error){
                console.log("여기에러");
                console.error(error);
                done(error);
        } 
           /*
    // 사용자의 정보는 profile에 들어있다.
    try {
        const exUser = await User.findOne({where: {snsId: profile.id, provider: 'kakao'}});
        if (exUser) {
            done(null, exUser);
        } else {
            const newUser = zawait User.create({
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
    } */
  }
))
                           }