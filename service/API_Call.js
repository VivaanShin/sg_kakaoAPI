var express = require('express');
var request = require('request');
var session = require('express-session');
module.exports = function (callee) {
    
    function API_Call(callee) {
        var OPTIONS = {
            headers: {'Content-Type': 'application/json', 'Authorization': "Bearer 12d4c95ea956909418dcc15ff61c2dca"},
            url: null,
            body: null
        };
        
        var OPTIONS_login = {
            headers: {'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Bearer 12d4c95ea956909418dcc15ff61c2dca'},
            url: null,
            body: null
        }
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
            
            login : function (callback) {
                OPTIONS_login.url = 'https://kauth.kakao.com/oauth/authorize' + "?client_id=" + process.env.KAKAO_ID + "&redirect_uri=https://yj-kakao-api.run.goorm.io/kauth/kakao/callback&response_type=code" ;

                request.get(OPTIONS_login, function (err, res) {
                    console.log("request get res", res.headers);
                });
            },
            token : function(authorization_code, callback){
                OPTIONS_login.url = 'https://kauth.kakao.com/oauth/token?grant_type=authorization_code&client_id=cdb9619875c94bd69dd7754a6d303642&redirect_uri=https://yj-kakao-api.run.goorm.io/oauth/kakao/callback&code='+authorization_code;
                /*
                OPTIONS_login.body = JSON.stringify({
                    "grant_type": "authorization_code",
                    "client_id": 'cdb9619875c94bd69dd7754a6d303642',
                    "redirect_uri": 'https://yj-kakao-api.run.goorm.io/oauth/kakao/callback',
                    "code": authorization_code
                });*/
                
                request.post(OPTIONS_login, function(err, res, result){
                    console.log("request post in");
                    console.log("result", result)
                    statusCodeErrorHandler(res.statusCode, callback, result);
                })
            },
            //apns, FCM 구현해야함
            push : function(uuid, device_id, push_type, push_token, callback){
                OPTIONS.url = HOST + '/v2/push/register';
                OPTIONS.body = JSON.stringify({
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
    
    function statusCodeErrorHandlerOauth(statusCode, callback , data) {
        switch (statusCode) {
            case 200:
                console.log("errorhandler 200 in")
                callback(null, data);
                break;
            default:
                callback('error', data);
                break;
        }
    }
    
    var INSTANCE;
    if (INSTANCE === undefined) {
        INSTANCE = new API_Call(callee);
    }
    return INSTANCE;
};