var WechatAPI = require('wechat-api');
var moment = require('moment');
var wxapi = new WechatAPI("wxe405194c4b25db9f", "84543a37b087b9bd00ce77e57bd44c26");

var ZKWechat = function() {

};

ZKWechat.prototype.handleMsg = function(weixin, msg) {
    var resMsg = {};
    switch (msg.msgType) {
        //文本
        case "text":
        default:
            resMsg = this.keyWordReply(msg);
            weixin.sendMsg(resMsg);
            break;
            //事件
        case "event":
            switch (msg.event) {
                case "LOCATION":
                    resMsg = {
                        fromUserName: msg.toUserName,
                        toUserName: msg.fromUserName,
                        msgType: "text",
                        content: "获取位置信息",
                        funcFlag: 0
                    };
                    weixin.sendMsg(resMsg);
                    break;
                case "CLICK":
                    resMsg = this.eventClickReply(msg, weixin);
                    break;
            }
            break;
    }
};

ZKWechat.prototype.keyWordReply = function(msg) {
    var resMsg = {};
    //关键字回复
    switch (msg.content) {
        case "文本":
            // 返回文本消息
            resMsg = {
                fromUserName: msg.toUserName,
                toUserName: msg.fromUserName,
                msgType: "text",
                content: "这是文本回复",
                funcFlag: 0
            };
            break;
        default:
            resMsg = {
                fromUserName: msg.toUserName,
                toUserName: msg.fromUserName,
                msgType: "text",
                content: "欢迎关注智慧芽",
                funcFlag: 0
            };
            break;
    }
    return resMsg;
};

ZKWechat.prototype.eventClickReply = function(msg, weixin) {
    var resMsg = {};
    switch (msg.eventKey) {
        case "event_lucky":
            // weixin.sendMsg("brand_story");
            var url = 'http://baidu.com';
            var data = {
              "patentId": {
                "value":"WO2018053885A1",
                "color":"#74bd00"
              },
              "title":{
                "value":"PREPARATION METHOD FOR AND USE OF ENHANCED SLIT2 CAR-T CELL AND CAR-NK CELL",
                "color":"#74bd00"
              },
              "time": {
                "value":moment().format('YYYY-MM-DD HH:mm:ss'),
                "color":"#74bd00"
              }
            };
            wxapi.sendTemplate(msg.fromUserName, 'nhivqpUJygwB30MVsePhW3VPyIRHTHmy3SgKMJbFjKg', url, data, function(error, result) {
                console.log(error);
                console.log(result);
                weixin.sendSuccess();
            });
            break;
        default:
            resMsg = {
                fromUserName: msg.toUserName,
                toUserName: msg.fromUserName,
                msgType: "text",
                content: "欢迎关注美问信息",
                funcFlag: 0
            };
            weixin.sendMsg(resMsg);
            break;
    }
};

module.exports = new ZKWechat();
