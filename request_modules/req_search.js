var request = require('request');

//웹문서 검색
exports.search_web=function(query, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/search/web',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "query": query
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result : ", result)
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}

//동영상 검색
exports.search_video=function(query, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/search/vclip',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "query": query
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result : ", result)
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}

//이미지 검색
exports.search_image=function(query, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/search/image',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "query": query
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result : ", result)
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}

//블로그 검색
exports.search_blog=function(query, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/search/blog',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "query": query
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result: ", result)
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}

//책 검색
exports.search_book=function(query, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v3/search/book',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "query": query
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result: ", result)
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}

//카페 검색
exports.search_cafe=function(query, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/search/cafe',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "query": query
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result: ", result)
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}
