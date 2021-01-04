var request = require('request');

//로그인 토큰 받기
exports.get_token=function(authorization_code, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kauth.kakao.com/oauth/token',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 
                      'Authorization': 'Bearer 12d4c95ea956909418dcc15ff61c2dca'
                     },
            
            form: {
                "grant_type": "authorization_code",
                "client_id": 'cdb9619875c94bd69dd7754a6d303642',
                "redirect_uri": 'https://yj-kakao-api.run.goorm.io/oauth/kakao/callback',
                "code": authorization_code
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result : ", result)
                //console.log("result1 ", result, "result type", typeof(result));
                
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        OPTIONS ={};
    })
}


//로그아웃
exports.logout_token=function(token, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kapi.kakao.com/v1/user/logout',
            headers: {'Authorization': 'Bearer ' + token
                     }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result : ", result)
                //console.log("result1 ", result, "result type", typeof(result));
                
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        OPTIONS ={};
    })
}