var express = require('express');
const _ = require('lodash');
var LiuyanModel = require('./models/liuyan.model');
var CityModel = require('./models/city.model');
var ConfigModel = require('./models/config.model');
var StoreModel = require('./models/store.model');
var StoryModel = require('./models/story.model');
var BannerModel = require('./models/banner.model');
var base64encode = require('./base64-code');
var config = require('./config/config.json');
// var WechatAPI = require('wechat-api');
// var wechatModel = require('./models/wechat.model');
// var wechatZk = require('./models/zk-wechat.model');

var nodemailer = require("nodemailer");
var smtpTransport = require('nodemailer-smtp-transport');

// wechatModel.token = 'patsnap';
// wechatZk.subscribeEvent(wechatModel);

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
    //'/api/wechat/patsnap',
    //'/api/wechat/createMenu'
];

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

router.route('/upload')
    .post((req, res) => {
        // console.log(req.file);
        response(res, `/${req.file.path}`);
    });
router.route('/login')
    .post((req, res) => {
        const userName = req.body.userName;
        const userPwd = req.body.userPwd;
        if (userName === config.adminName && userPwd === config.adminPwd) {
            res.cookie(config.cookieLoginName, base64encode(config.cookieLoginValue), { maxAge: 1*60*60*1000, httpOnly: false });
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
router.route('/city')
    .post((req, res) => {
        const city = new CityModel();
        city.toModel(req.body);
        city.save(results => response(res, results), err => response(res, null, err));
    })
    .get((req, res) => {
        const query = {
            page: _.get(req.query, 'page', 1),
            size: _.get(req.query, 'size', 10)
        }
        CityModel.getListAndTotal(query, results => response(res, results), err => response(res, null, err));
    });
router.route('/city/:id')
    .put((req, res) => {
        const cityId = req.params.id;
        CityModel.saveStatus(cityId, 1, results => response(res, results), err => response(res, null, err));
    })
    .delete((req, res) => {
        const cityId = req.params.id;
        CityModel.deleteById(cityId, results => response(res, results), err => response(res, null, err));
    });
router.route('/city')
    .post((req, res) => {
        const city = new CityModel();
        city.toModel(req.body);
        city.save(results => response(res, results), err => response(res, null, err));
    })
    .get((req, res) => {
        const query = {
            page: _.get(req.query, 'page', 1),
            size: _.get(req.query, 'size', 10)
        }
        CityModel.getListAndTotal(query, results => response(res, results), err => response(res, null, err));
    });
router.route('/city/status')
    .get((req, res) => {
        CityModel.getListByStatus(1, results => response(res, results), err => response(res, null, err));
    });
router.route('/store')
    .post((req, res) => {
        const store = new StoreModel();
        store.toModel(req.body);
        store.save(results => response(res, results), err => response(res, null, err));
    })
    .get((req, res) => {
        const query = {
            page: _.get(req.query, 'page', 1),
            size: _.get(req.query, 'size', 10)
        };
        StoreModel.getListAndTotal(query, results => response(res, results), err => response(res, null, err));
    });
router.route('/store/status')
    .get((req, res) => {
        StoreModel.getListByStatus(1, results => response(res, results), err => response(res, null, err));
    });
router.route('/store/:id')
    .get((req, res) => {
        const storeId = req.params.id;
        StoreModel.getById(storeId, results => response(res, results), err => response(res, null, err));
    })
    .put((req, res) => {
        const storeModel = new StoreModel();
        storeModel.toModel(req.body);
        storeModel.save(results => response(res, results), err => response(res, null, err));
    })
    .delete((req, res) => {
        const storeId = req.params.id;
        StoreModel.deleteById(storeId, results => response(res, results), err => response(res, null, err));
    });
router.route('/store/status/:id')
    .put((req, res) => {
        const storeId = req.params.id;
        StoreModel.saveStatus(storeId, 1, results => response(res, results), err => response(res, null, err));
    })
    .delete((req, res) => {
        const storeId = req.params.id;
        StoreModel.deleteById(storeId, results => response(res, results), err => response(res, null, err));
    });
router.route('/banner')
    .post((req, res) => {
        const model = new BannerModel();
        model.BannerModel(req.body);
        model.save(results => response(res, results), err => response(res, null, err));
    })
    .get((req, res) => {
        const query = {
            page: _.get(req.query, 'page', 1),
            size: _.get(req.query, 'size', 10)
        };
        BannerModel.getListAndTotal(query, results => response(res, results), err => response(res, null, err));
    });
router.route('/banner/:id')
    .get((req, res) => {
        const bannerId = req.params.id;
        BannerModel.getById(bannerId, results => response(res, results), err => response(res, null, err));
    })
    .put((req, res) => {
        const model = new BannerModel();
        model.toModel(req.body);
        model.save(results => response(res, results), err => response(res, null, err));
    });
router.route('/banner/name/:id')
    .get((req, res) => {
        const bannerName = req.params.id;
        BannerModel.getByName(bannerName, results => response(res, results), err => response(res, null, err));
    })
router.route('/config/:type')
    .get((req, res) => {
        const type = req.params.type;
        ConfigModel.getByType(type, results => response(res, results), err => response(res, null, err));
    })
    .put((req, res) => {
        const configs = req.body;
        ConfigModel.update(configs, results => response(res, results), err => response(res, null, err));
    });
router.route('/story')
    .post((req, res) => {
        const story = new StoryModel();
        story.toModel(req.body);
        story.save(results => response(res, results), err => response(res, null, err));
    })
    .get((req, res) => {
        const query = {
            page: _.get(req.query, 'page', 1),
            size: _.get(req.query, 'size', 10)
        };
        StoryModel.getListAndTotal(query, results => response(res, results), err => response(res, null, err));
    });
router.route('/story/status')
    .get((req, res) => {
        StoryModel.getListByStatus(1, results => response(res, results), err => response(res, null, err));
    });
router.route('/story/:id')
    .get((req, res) => {
        const storyId = req.params.id;
        StoryModel.getById(storyId, results => response(res, results), err => response(res, null, err));
    })
    .put((req, res) => {
        const storyModel = new StoryModel();
        storyModel.toModel(req.body);
        storyModel.save(results => response(res, results), err => response(res, null, err));
    })
    .delete((req, res) => {
        const storyId = req.params.id;
        StoryModel.deleteById(storyId, results => response(res, results), err => response(res, null, err));
    });
// router.route('/wechat/patsnap')
//     .post((req, res) => {
//         wechatModel.loop(req, res);
//     })
//     .get((req, res) => {
//         console.log("[post patsnap]" + req.params[0]);
//         // 签名成功
//         if (wechatModel.checkSignature(req)) {
//             res.status(200).send(req.query.echostr);
//         } else {
//             res.status(200).send(false);
//         }
//     });

// router.route("/wechat/createMenu")
//     .post((req, res) => {
//         console.log("[createMenu]" + JSON.stringify(req.body));
//         var menu = {
//             "button": [{
//                 "name": "进入智慧芽",
//                 "type": "view",
//                 "url": "https://analytics.zhihuiya.com/"
//             }, {
//                 "name": "行业分类",
//                 "sub_button": [{
//                     "type": "click",
//                     "name": "汽车",
//                     "key": "event_jixie"
//                 }, {
//                     "type": "click",
//                     "name": "手机",
//                     "key": "event_dianxue"
//                 }, {
//                     "type": "click",
//                     "name": "AI",
//                     "key": "event_tongxun"
//                 }, {
//                     "type": "click",
//                     "name": "化工",
//                     "key": "event_huaxue"
//                 }, {
//                     "type": "click",
//                     "name": "医药",
//                     "key": "event_yiyao"
//                 }]
//             }]
//         };
//         //var wxapi = new WechatAPI("wx142ced39f208b776", "0f5b64509578f6eade2a5de1a9ddfba1");
//         var wxapi = new WechatAPI("wxe405194c4b25db9f", "84543a37b087b9bd00ce77e57bd44c26");
//         wxapi.createMenu(menu, function(error, result) {
//             console.log(error);
//             console.log(result);
//             res.status(200).send(result);
//         });
//     });
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


// router.route('/importStore')
//     .get((req, res) => {
//         let timeDelay = 0;
//         const CityList = require('./models/store.mock');
//         _.forEach(CityList, (city, index1) => {
//             _.forEach(city.storeList, (store, index2)=>{
//                 store.cityId = city.id;
//                 delete store.id;
//                 store.section1 = '';
//                 store.section2 = '';
//                 store.section3 = '';
//                 store.section4 = '';
//                 store.section5 = '';
//                 _.forEach(store.images, (image)=>{
//                     if(image.section == '活动区') {
//                         if (image.items && image.items.length>0) {
//                             store.section1 = image.items.join(',');
//                         }
//                     } else if (image.section == '住宿区') {
//                         if (image.items && image.items.length>0) {
//                             store.section2 = image.items.join(',');
//                         }
//                     } else if (image.section == '周边') {
//                         if (image.items && image.items.length>0) {
//                             store.section3 = image.items.join(',');
//                         }
//                     }
//                 });
//                 const storeModel = new StoreModel();
//                 storeModel.toModel(store);
//                 setTimeout(()=>{
//                     storeModel.save(results => {}, err => {});
//                 },timeDelay);
//                 timeDelay += 100;
//             });
//         });
//         res.json({ message: 'import ing!' });
//     });

// router.route('/importStory')
//     .get((req, res) => {
//         let timeDelay = 0;
//         const {storyList, newsList} = require('./models/story.mock');
//         _.forEach(_.concat(storyList, newsList), (item, index) => {
//             delete item.id;
//             item.paragraph = item.paragraph.join('\\n');
//             const storyModel = new StoryModel();
//             storyModel.toModel(item);
//             setTimeout(()=>{
//                 storyModel.save(results => {}, err => {});
//             },timeDelay);
//             timeDelay += 100;
//         });
//         res.json({ message: 'import ing!' });
//     });

router.get('/**', function(req, res) {
    res.json({ message: 'hello kugou!' });
});

module.exports = router;