var request = require('request');

exports.check_plusfriends=function(token, callback){
    return new Promise((resolve, reject)=>{
        console.log("exports token in", token);
        var OPTIONS = {
            headers: {
                      'Authorization': 'Bearer ' + token
                     },
            url: 'https://kapi.kakao.com/v1/api/talk/plusfriends'
            
        }
        
        request.get(OPTIONS, function(err, res, result){
            if(!err){
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}
