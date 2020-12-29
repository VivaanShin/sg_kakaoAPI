var request = require('request');

//얼굴 검출하기(used by image_url)
exports.face_image_url=function(image_url, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/vision/face/detect',
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

//얼굴 검출하기(used by image_url)
exports.face_image=function(callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/vision/face/detect',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "image": '../uploadedFiles/1609227631962__girl-919048_1920.jpg'
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

//상품 검출하기
exports.product_image_url=function(image_url, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/vision/product/detect',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "image_url": image_url
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

//성인 이미지 판별
exports.adult_image_url=function(image_url, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/vision/adult/detect',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "image_url": image_url
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

//썸네일 생성
exports.thumbnailCrop_image_url=function(image_url, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/vision/thumbnail/crop',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "image_url": image_url,
                "width": "200",
                "height": "200"
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

//썸네일 검출
exports.thumbnailDetect_image_url=function(image_url, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/vision/thumbnail/detect',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "image_url": image_url,
                "width": "200",
                "height": "200"
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

//멀티태그 생성
exports.multitag_image_url=function(image_url, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/vision/multitag/generate',
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "image_url": image_url
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




