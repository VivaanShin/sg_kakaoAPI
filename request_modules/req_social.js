var request = require('request');


//소셜 프로필 가져오기
exports.user_profile_token=function(token, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kapi.kakao.com/v1/api/talk/profile',
            headers: {
                'Authorization': 'Bearer ' + token
            }
            
        }
        
        request.get(OPTIONS, function(err, res, result){
            if(!err){
                result = JSON.parse(result);
                console.log("result1", result)
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        OPTIONS ={};
    })
}

//소셜 친구 목록 가져오기
exports.user_friends_list_token=function(token, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kapi.kakao.com/v1/api/talk/friends',
            headers: {
                'Authorization': 'Bearer ' + token
            }
            
        }
        
        request.get(OPTIONS, function(err, res, result){
            if(!err){
                result = JSON.parse(result);
                console.log("result1", result)
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        OPTIONS ={};
    })
}


//소셜 친구 목록 동의 받기
exports.user_friends_list_agree=function(callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kauth.kakao.com//oauth/authorize',
            form: {
                'client_id': 'cdb9619875c94bd69dd7754a6d303642',
                'redirectUri': "https://yj-kakao-api.run.goorm.io/social/friends/rest/agree",
                'response_type': 'code',
                'scope': 'talk_message,friends'
            }
           
            
        }
            
        
        request.get(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result:", result);
                resolve("OK");
            }else{
                console.error(err);
            }
            
        });
        OPTIONS ={};
    })
}

