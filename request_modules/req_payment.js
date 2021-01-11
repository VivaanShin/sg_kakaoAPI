var request = require('request');

//결제준비
exports.payment_ready=function(paymentData, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kapi.kakao.com/v1/payment/ready',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 
                      'Authorization': 'KakaoAK 12d4c95ea956909418dcc15ff61c2dca'
                     },
            
            form: {
                "cid": paymentData.cid,
                "partner_order_id": paymentData.partner_order_id,
                "partner_user_id": paymentData.partner_user_id,
                "item_name": paymentData.item_name,
                "quantity": paymentData.quantity,
                "total_amount": paymentData.total_amount,
                "tax_free_amount": paymentData.tax_free_amount,
                "approval_url": "https://yj-kakao-api.run.goorm.io/pay/payment/approval",
                "cancel_url": "https://yj-kakao-api.run.goorm.io/pay/payment/cancel",
                "fail_url": "https://yj-kakao-api.run.goorm.io/pay/payment/fail"
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}

//결제 승인
exports.payment_approve=function(req, pg_token, callback){
    return new Promise((resolve, reject)=>{
        var OPTIONS = {
            url: 'https://kapi.kakao.com/v1/payment/approve',
            headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8', 
                      'Authorization': 'KakaoAK 12d4c95ea956909418dcc15ff61c2dca'
                     },
            
            form: {
                "cid": req.session.paymentInfo.cid,
                "tid": req.session.paymentInfo.tid,
                "partner_order_id": req.session.paymentInfo.partner_order_id,
                "partner_user_id": req.session.paymentInfo.partner_user_id,
                "pg_token": pg_token
            }
            
        }
        
        request.post(OPTIONS, function(err, res, result){
            if(!err){
                console.log("result1 ", result, "result type", typeof(result));
                result = JSON.parse(result);
                resolve(result);
            }else{
                console.error(err);
            }
            
        });
        
    })
}
