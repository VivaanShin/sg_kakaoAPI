var request = require('request');

//이미지 분석하기
exports.imageAnalysis_image_url=function(image_url, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://cv-api.kakaobrain.com/pose',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "image_url": image_url
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
