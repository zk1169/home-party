var express = require('express');
var WechatAPI = require('wechat-api');
var LiuyanModel = require('./models/liuyan.model');
var base64encode = require('./base64-code');
var config = require('./config/config.json');
var wechatModel = require('./models/wechat.model');
var wechatZk = require('./models/zk-wechat.model');

wechatModel.token = 'patsnap';
// 监听文本消息
wechatModel.textMsg(function(msg) {
    wechatZk.handleMsg(wechatModel, msg);
});

// 监听图片消息
wechatModel.imageMsg(function(msg) {
    wechatZk.handleMsg(wechatModel, msg);
});

// 监听位置消息
wechatModel.locationMsg(function(msg) {
    wechatZk.handleMsg(wechatModel, msg);
});

// 监听链接消息
wechatModel.urlMsg(function(msg) {
    wechatZk.handleMsg(wechatModel, msg);
});

// 监听事件消息
wechatModel.eventMsg(function(msg) {
    wechatZk.handleMsg(wechatModel, msg);
});

var router = express.Router();

const response = (res, data, err) => {
    responseObj = {};
    if (err) {
        responseObj.status = false;
        responseObj.data = err;
    } else {
        responseObj.status = true;
        responseObj.data = data;
    }
    res.json(responseObj);
}

// middleware to use for all requests
router.use(function(req, res, next) {
    const noAuthRouter = [
        '/api/login',
        '/api/wechat/patsnap',
        '/api/wechat/createMenu'
    ];
    let isNoAuth = false;
    for(let i=0;i<noAuthRouter.length;i++){
        if (req.originalUrl.indexOf(noAuthRouter[i]) > -1) {
            isNoAuth = true;
            break;
        }
    }
    if (isNoAuth) {
        next(); // make sure we go to the next routes and don't stop here
        return;
    }
    var Cookies = {};
    req.headers.cookie && req.headers.cookie.split(';').forEach(function( Cookie ) {
        var parts = Cookie.split('=');
        Cookies[parts[0].trim()] = (parts[1] || '').trim();
    });
    if (Cookies[config.cookieLoginName] && Cookies[config.cookieLoginName] === base64encode(config.adminPwd)) {
        next(); // make sure we go to the next routes and don't stop here
    } else {
        response(res, false);
    }
});

router.route('/wechat/patsnap')
    .post((req, res) => {
        wechatModel.loop(req, res);
    })
    .get((req, res) => {
        console.log("[patsnap]" + req.params[0]);
        // 签名成功
        if (wechatModel.checkSignature(req)) {
            res.status(200).send(req.query.echostr);
        } else {
            res.status(200).send(false);
        }
    });

    router.route("/wechat/createMenu")
        .post((req, res) => {
            console.log("[createMenu]" + JSON.stringify(req.body));
            var menu = {
                "button": [{
                    "name": "试试手气",
                    "type": "click",
                    "key": "event_lucky"
                }, {
                    "name": "行业分类",
                    "sub_button": [{
                        "type": "click",
                        "name": "教育",
                        "key": "event_education"
                    }, {
                        "type": "click",
                        "name": "医疗",
                        "key": "event_medical"
                    }, {
                        "type": "click",
                        "name": "法律",
                        "key": "event_lagal"
                    }]
                }]
            };
            //var wxapi = new WechatAPI("wx142ced39f208b776", "0f5b64509578f6eade2a5de1a9ddfba1");
            var wxapi = new WechatAPI("wxe405194c4b25db9f", "84543a37b087b9bd00ce77e57bd44c26");
            wxapi.createMenu(menu, function(error, result) {
                console.log(error);
                console.log(result);
                res.status(200).send(result);
            });
        });

router.route('/login')
    .post((req, res) => {
        const userName = req.body.userName;
        const userPwd = req.body.userPwd;
        if (userName === config.adminName && userPwd === config.adminPwd) {
            res.cookie(config.cookieLoginName, base64encode(config.cookieLoginValue), { maxAge: 900000, httpOnly: false });
            res.cookie(config.cookieAdminNameField, config.adminName, { maxAge: 900000, httpOnly: false });
            response(res, true);
        } else {
            response(res, false);
        }
    })
    .delete((req, res) => {
        res.cookie(config.cookieLoginName, '', { maxAge: 0, httpOnly: false });
        res.cookie(config.cookieAdminNameField, '', { maxAge: 0, httpOnly: false });
        response(res, true);
    });

router.route('/liuyan/:id')
    .put((req, res) => {
        const liuyanId = req.params.id;
        const liuyan = new LiuyanModel();
        liuyan.toModel(req.body);
        liuyan.id = liuyanId;
        liuyan.save(results => response(res, results), err => response(res, null, err));
    })
    .get((req, res) => {
        const liuyanId = req.params.id;
        LiuyanModel.getById(liuyanId, results => response(res, results), err => response(res, null, err));
    })
    .delete((req, res) => {
        const liuyanId = req.params.id;
        LiuyanModel.deleteById(liuyanId, results => response(res, results), err => response(res, null, err));
    });

router.route('/liuyan')
    .post((req, res) => {
        const liuyan = new LiuyanModel();
        liuyan.toModel(req.body);
        liuyan.save(results => response(res, results), err => response(res, null, err));
    })
    .get((req, res) => {
        LiuyanModel.getList(results => response(res, results), err => response(res, null, err));
    });

router.get('/**', function(req, res) {
    res.json({ message: 'hello kugou!' });   
});

module.exports = router;