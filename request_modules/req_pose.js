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

//동영상 분석하기
exports.videoAnalysis_video_url=function(video_url, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://cv-api.kakaobrain.com/pose/job',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "video_url": video_url,
                "callback_url": "https://yj-kakao-api.run.goorm.io/pose/videoAnalysis/callback"
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


//동영상 분석 결과보기
exports.videoAnalysis_result=function(job_id, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://cv-api.kakaobrain.com/pose/job/' + job_id,
            headers: { 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     }
            
        }
        
        request.get(OPTIONS, function(err, res, result){
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