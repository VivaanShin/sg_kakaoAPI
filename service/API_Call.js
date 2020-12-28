var request = require('request');

module.exports = function (callee) {
    
    function API_Call(callee) {
        var OPTIONS = {
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer 12d4c95ea956909418dcc15ff61c2dca"},
            url: null,
            body: null
        };
        
        var HOST, BASE_PATH;
        
        (function () {
            switch (callee) {
                case 'kakao':
                    HOST = 'https://kapi.kakao.com';
                    break;
                case 'oauth':
                    HOST = 'https://kauth.kakao.com';
                    break;
                case 'another':
                    HOST = 'http://localhost';
                    break;
                default:
                    HOST = 'https://kapi.kakao.com';
            }
        })(callee);
        
        return {
            
            login : function (user_id, password, callback) {
                OPTIONS.url = HOST + '/oauth/authorize';
                OPTIONS.body = JSON.stringify({
                    "client_id": process.env.KAKAO_ID,
                    "redirect_uri": 'https://yj-kakao-api.run.goorm.io/kauth/kakao/callback',
                    "response_type": "code"
                });

                request.get(OPTIONS, function (err, res, result) {
                    console.log(res.code);
                });
            },
            //apns, FCM 구현해야함
            push : function(uuid, device_id, push_type, push_token, callback){
                OPTIONS.url = HOST + '/v2/push/register';
                OPTIONS.body = JSON>stringify({
                    "uuid":process.env.YUNJAE_UUID,
                    "device_id": '10382733372',
                    "push_type": 'apns',
                    "push_token": "dfsfsfsfsfdfdfdf"
                });
            },
            
            story_check : function(callback){
                OPTIONS.url = HOST + '/v1/api/story/isstoryuser';
                console.log("story_check in")
                request.post(OPTIONS, function(err, res, result){
                    statusCodeErrorHandler(res.statusCode, callback, result);
                });
                
            }
        };
    }
    
    function statusCodeErrorHandler(statusCode, callback , data) {
        switch (statusCode) {
            case 200:
                callback(null, JSON.parse(data));
                break;
            default:
                callback('error', JSON.parse(data));
                break;
        }
    }
    
    var INSTANCE;
    if (INSTANCE === undefined) {
        INSTANCE = new API_Call(callee);
    }
    return INSTANCE;
};