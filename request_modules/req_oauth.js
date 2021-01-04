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


//카카오계정과 함께 로그아웃
exports.logoutWithAccount=function(callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kauth.kakao.com/oauth',
            form: {
                client_id: "cdb9619875c94bd69dd7754a6d303642",
                logout_redirect_uri: "https://yj-kakao-api.run.goorm.io/oauth/logout"
            }
            
        }
        
        request.get(OPTIONS, function(err, res, result){
            if(!err){
                console.log("logoutWithAccount success")
                resolve("good")
            }else{
                console.error(err);
            }
            
        });
        OPTIONS ={};
    })
}

//토큰 정보 보기
exports.token_info=function(token, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kapi.kakao.com/v1/user/access_token_info',
            
            headers: {'Authorization': 'Bearer ' + token,
                      'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
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

//토큰 갱신하기
exports.token_refresh=function(token, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kauth.kakao.com/oauth/token',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            form: {
                grant_type: 'refresh_token',
                client_id : 'cdb9619875c94bd69dd7754a6d303642',
                refresh_token: token
                
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
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


//토큰으로 사용자정보 가져오기
exports.user_info_token=function(token, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kapi.kakao.com/v2/user/me',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': 'Bearer ' + token
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
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

//어드민 키로 사용자정보 가져오기
exports.user_info_admin=function(callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kapi.kakao.com/v2/user/me',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': "KakaoAK 12d4c95ea956909418dcc15ff61c2dca"
            }
        }
        
        request.post(OPTIONS, function(err, res, result){
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


//사용자 정보 저장하기
exports.user_info_save=function(token, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kapi.kakao.com/v1/user/update_profile',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': 'Bearer ' + token
            },
            form:{
                'properties' : {"nickname":"신윤재", "birthday":"0805"}
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
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

//사용자 목록 받기
exports.user_info_list=function(callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kapi.kakao.com//v1/user/ids',
            headers: {
                'Content-type': 'application/x-www-form-urlencoded;charset=utf-8',
                'Authorization': 'KakaoAK ' + "12d4c95ea956909418dcc15ff61c2dca"
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

