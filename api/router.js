var express = require('express');
const _ = require('lodash');
var WechatAPI = require('wechat-api');
var LiuyanModel = require('./models/liuyan.model');
var base64encode = require('./base64-code');
var config = require('./config/config.json');
var wechatModel = require('./models/wechat.model');
var wechatZk = require('./models/zk-wechat.model');

var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

wechatModel.token = 'patsnap';
wechatZk.subscribeEvent(wechatModel);

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

const noAuthRouter = [
    '/api/login',
    '/api/wechat/patsnap',
    '/api/wechat/createMenu'
];

router.route('/mail')
    .get((req, res) => {
        var transport = nodemailer.createTransport(smtpTransport({
            host: "smtp.qq.com", // 主机
            secure: true, // 使用 SSL
            port: 465, // SMTP 端口
            auth: {
                user: "287760234@qq.com", // 账号
                pass: "cwl7758521" // 密码
            }
        }));
        var mailOptions = {
            from: "287760234@qq.com", // 发件地址
            // to: "liouxingben@163.com", // 收件列表
            to: "zlisa526@126.com", // 收件列表
            subject: "行业最新动态", // 标题
            html: `<div style="border: 4px solid #f5f5f5;width: 645px;margin: 0 auto;">
            <div style="padding-left: 20px;height: 51px;line-height: 51px;background-color: #73bc00;font-size: 24px;color: #fff;">
                下面这些专利要搞事情啦！！！
            </div>
            <div style="padding: 0px 20px 20px 20px;border-bottom: 1px solid #d2d2d2;">
                  <div style="font-size: 16px;color: #73bc00;margin-top: 10px;font-weight: bold;">索意互动(北京)信息技术有限公司</div>
                  <a style="text-decoration: none;font-size: 16px;color: #4a90e2;display: block;" target="_blank" href="https://share-analytics.zhihuiya.com/view/9B51C15AB16A080AB83BAF2D20C8E5D607E2B6B4DF42FAF416FB62DF6FE2EF53E00AC250BD1B3F7C5F7C1F8870C69020897CF10C1386B2F435888BBC006AF671E9A3BAC1981896E0">
                    一种基于索引词的分析方法与装置
                  </a>
                  <div style="font-size: 14px;color: #999;">法律状态：实质审查</div>
                  <div style="color: #609900;font-size: 12px;">CN107562753A</div>
                <div style="font-size: 12px;color: #999;">公开(公告)日：2018-01-09</div> 
            </div>
            <div style="padding: 0px 20px 20px 20px;border-bottom: 1px solid #d2d2d2;">
              <div style="font-size: 16px;color: #73bc00;margin-top: 10px;font-weight: bold;">CPA GLOBAL LIMITED</div>
              <a style="text-decoration: none;font-size: 16px;color: #4a90e2;display: block;" target="_blank" href="https://share-analytics.zhihuiya.com/view/9B51C15AB16A080AB83BAF2D20C8E5D607E2B6B4DF42FAF416FB62DF6FE2EF53E00AC250BD1B3F7C5F7C1F8870C69020897CF10C1386B2F435888BBC006AF671E9A3BAC1981896E0">Idea And Trade Secret Management Systems And Methods</a>
              <div style="font-size: 14px;color: #999;">法律状态：实质审查</div>
              <div style="color: #609900;font-size: 12px;">US20170365021A1</div>
              <div style="font-size: 12px;color: #999;">公开(公告)日：2017-12-21</div>
          </div>
            <div style="padding: 0px 20px 20px 20px;border-bottom: 1px solid #d2d2d2;">
              <div style="font-size: 16px;color: #73bc00;margin-top: 10px;font-weight: bold;">BLACK HILLS IP HOLDINGS, LLC</div>
              <a style="text-decoration: none;font-size: 16px;color: #4a90e2;display: block;" target="_blank" href="https://share-analytics.zhihuiya.com/view/DBB78CCA006654FE7925538F8879D04E2543F766101C061C3C97A4964940F539647FEC2F71412BAF751D1C9D2ADCF9E932F9C6F19F06E6186525ED2348F4E1ABB98DFA4A2E00B00E">
                  APPARATUS AND METHOD FOR AUTOMATED AND ASSISTED PATENT CLAIM MAPPING AND EXPENSE PLANNING
              </a>
              <div style="font-size: 14px;color: #999;">法律状态：公开</div>
              <div style="color: #609900;font-size: 12px;">US20180137194A1</div>
              <div style="font-size: 12px;color: #999;">公开(公告)日：2018-05-17</div>
          </div>
          <div style="border-top:2px dashed #d2d2d2;padding:18px 20px 18px 20px;color:#777;font-size:14px;">
              <div style="padding-top:7px;padding-bottom:7px;">
              <span style="font-size:16px;">想了解更多竞争对手和相关技术，请点击<a href="https://analytics.zhihuiya.com/" target="_blank">传送通道</a></span><br>
              <span style="font-size:14px;">本邮件为系统自动发送，请勿直接回复。如需要帮助请发送到support@patsnap.com</span>
              <div style="font-size:14px;">
                  -- PatSnap团队 敬上
              </div>
          </div>
          </div>
        </div>`
        };
        transport.sendMail(mailOptions, function(error, resp) {
            if (error) {
                console.error(error);
            } else {
                console.log(resp);
            }
            transport.close(); // 如果没用，关闭连接池
            response(res, true);
        });
    });
// middleware to use for all requests
router.use(function(req, res, next) {
    let isNoAuth = true;
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
        console.log("[post patsnap]" + req.params[0]);
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
                "name": "进入智慧芽",
                "type": "view",
                "url": "https://analytics.zhihuiya.com/"
            }, {
                "name": "行业分类",
                "sub_button": [{
                    "type": "click",
                    "name": "汽车",
                    "key": "event_jixie"
                }, {
                    "type": "click",
                    "name": "手机",
                    "key": "event_dianxue"
                }, {
                    "type": "click",
                    "name": "AI",
                    "key": "event_tongxun"
                }, {
                    "type": "click",
                    "name": "化工",
                    "key": "event_huaxue"
                }, {
                    "type": "click",
                    "name": "医药",
                    "key": "event_yiyao"
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
        const query = {
            page: _.get(req.query, 'page', 1),
            size: _.get(req.query, 'size', 10)
        }
        LiuyanModel.getListAndTotal(query, results => response(res, results), err => response(res, null, err));
    });

router.get('/**', function(req, res) {
    res.json({ message: 'hello kugou!' });   
});

module.exports = router;