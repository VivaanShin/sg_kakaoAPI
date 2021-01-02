var request = require('request');

//주소 검색
exports.local_search_address=function(query, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/local/search/address.json',
            headers: {'Content-Type': 'application/json;charset=UTF-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "query": query
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

//좌표로 행정구역정보 받기
exports.coord2regioncode=function(x, y, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json',
            headers: {'Content-Type': 'application/json;charset=UTF-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "x": x,
                "y": y,
                "input_coord": "WGS84",
                "output_coord": "WGS84"
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


//좌표로 주소 변환하기
exports.coord2address=function(x, y, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/local/geo/coord2address.json',
            headers: {'Content-Type': 'application/json;charset=UTF-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "x": x,
                "y": y,
                "input_coord": "WGS84"
            }
            
        }
        
        
        
        request.get(OPTIONS, function(err, res, result){
            console.log("request get in");
            if(!err){
                //console.log("result : ", result)
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.log("request error in")
                console.error(err);
            }
            
        });
        OPTIONS ={};
    })
}

//좌표계 변환
exports.transcoord=function(x, y, input_coord, output_coord, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/local/geo/transcoord.json',
            headers: {'Content-Type': 'application/json;charset=UTF-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "x": x,
                "y": y,
                "input_coord": input_coord,
                "output_coord": output_coord
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


//키워드로 검색하기
exports.local_keyword=function(query, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/local/search/keyword.json',
            headers: {'Content-Type': 'application/json;charset=UTF-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "query": query
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


//키워드로 검색하기
exports.local_category=function(query, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/local/search/category.json',
            headers: {'Content-Type': 'application/json;charset=UTF-8', 
                      'Authorization': 'KakaoAK cdb9619875c94bd69dd7754a6d303642'
                     },
            
            form: {
                "category_group_code": query
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

