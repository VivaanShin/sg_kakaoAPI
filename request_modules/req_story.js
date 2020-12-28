var request = require('request');

exports.story_check=function(token, callback){
    return new Promise((resolve, reject)=>{
        console.log("exports token in", token);
        var OPTIONS = {
            headers: {'Content-Type': 'application/json', 
                      'Authorization': 'Bearer ' + token
                     },
            url: 'https://kapi.kakao.com/v1/api/story/isstoryuser',
            body: null
            
        }
        
        console.log("story headers check: ", OPTIONS.headers);
        request.get(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result story isStoryUser", result)
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                console.log("result2 ", result, "result type", typeof(result));
                var check = result.isStoryUser;
                console.log("check1 ", check, "check1 type", typeof(check));
                check = JSON.stringify(check);
                console.log("check2 ", check, "check2 type", typeof(check));
                resolve(check);
            }else{
                console.error(err);
            }
            
        });
        
    })
}


exports.get_story_profile=function(token, callback){
    return new Promise((resolve, reject)=>{
        console.log("exports token in", token);
        var OPTIONS = {
            headers: {'Content-Type': 'application/json', 
                      'Authorization': 'Bearer ' + token
                     },
            url: 'https://kapi.kakao.com/v1/api/story/profile',
            body: null
            
        }
        
        console.log("story headers check: ", OPTIONS.headers);
        request.get(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result story profile: ", result)
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}

exports.write_text=function(token, content, callback){
    return new Promise((resolve, reject)=>{
        console.log("exports token in", token);
        console.log("exports content in", content);
        var OPTIONS = {
            url: 'https://kapi.kakao.com/v1/api/story/post/note',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 
                      'Authorization': 'Bearer ' + token
                     },
            
            body: {
                "content": content
            }
            
        }
        
        console.log("OPTIONS check: ", OPTIONS);
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result story profile: ", result)
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}