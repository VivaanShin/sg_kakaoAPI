var request = require('request');
var fs = require('fs');

//음성 인식하기
exports.voice_recognize=function(audio, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kakaoi-newtone-openapi.kakao.com/v1/recognize',
            headers: {'Content-Type': 'application/octet-stream', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642',
                      'X-DSS-Service': 'DICTATION'
                     },
            
            form: {
                "audio": audio
            }
            
        }
        
        
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                //console.log("result : ", result)
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