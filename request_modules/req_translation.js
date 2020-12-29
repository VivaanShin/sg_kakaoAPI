var request = require('request');

//문장 번역하기
exports.translate=function(query, src_lang, target_lang, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/translation/translate',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "query": query,
                "src_lang": src_lang,
                "target_lang": target_lang
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
        OPTIONS ={};
    })
}

//언어 감지하기
exports.language_detect=function(query, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v3/translation/language/detect',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 
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
        OPTIONS ={};
    })
}