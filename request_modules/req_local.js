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
exports.coord2regioncode=function(x, y, input_coord, output_coord, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://dapi.kakao.com/v2/local/geo/coord2regioncode.json',
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