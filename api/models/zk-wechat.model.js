var WechatAPI = require('wechat-api');
var moment = require('moment');
var WechatModel = require('./wechat-table.model');
var wxapi = new WechatAPI("wxe405194c4b25db9f", "84543a37b087b9bd00ce77e57bd44c26");

const color = "#74bd00";
const templateId = 'Rt2aWY38FabSfTuRIbhghrjpku-w-nht4gDKRFsoEdc';
const needEmail = "\n您关注的领域已经获取到专利信息了，请输入您的Email获取信息";
const menuStr = '1. 汽车\n2. 手机\n3. AI\n4. 化工\n5. 医药\n\n输入对应序号，获取对应领域的专利信息';
var ZKWechat = function() {
  // console.log('new ZKWechat');
};

const send1 = function(msg, weixin, desc) {
  var url = 'https://analytics.zhihuiya.com/patent_view/view?patentId=FC20F8C8F3B067B455D77967503539E7597E93BBF598AA692125AEC82D2F05F398F6EEDCF6B34E918698B27AF08BC9C04CC0AECD184429BB012D19EE11B47B31321D73FE41A9C2D9&sort=pdesc&rows=20&page=1&_type=query&q=TA%3A%28%E5%8F%91%E5%8A%A8%E6%9C%BA%29+AND+PN%3A%28CN%29&efq=AN_FACET_CN%3A%28%22%E9%80%9A%E7%94%A8%E6%B1%BD%E8%BD%A6%E7%8E%AF%E7%90%83%E7%A7%91%E6%8A%80%E8%BF%90%E4%BD%9C%E6%9C%89%E9%99%90%E8%B4%A3%E4%BB%BB%E5%85%AC%E5%8F%B8%22%29#1/FC20F8C8F3B067B455D77967503539E7597E93BBF598AA692125AEC82D2F05F398F6EEDCF6B34E918698B27AF08BC9C04CC0AECD184429BB012D19EE11B47B31321D73FE41A9C2D9/detail-abst';
  var data = {
    "patentId": {
      "value":"CN105275653B",
      "color":color
    },
    "assigner": {
      "value":"通用汽车环球科技运作有限责任公司",
      "color":color
    },
    "title":{
      "value":"用于控制内燃机的操作的方法和设备",
      "color":color
    },
    "ptime": {
      "value":'2018-05-22',
      "color":color
    },
    "desc": {
      "value": desc||''
    }
  };
  if (desc) {
    data.desc = {
      value: desc
    };
  }
  wxapi.sendTemplate(msg.fromUserName, 'S7LZ0jN1T_p0FZASNgDDXJ0K71U40kOcRRnJeystsj8', url, data, function(error, result) {
      // console.log(error);
      // console.log(result);
      weixin.sendSuccess();
  });
};

const send2 = function(msg, weixin, desc) {
  var url = 'https://analytics.zhihuiya.com/patent_view/view?patentId=4E0B8C97AACD861E10E0B5E17353BC5EF0B7A66E2B96223F17DD212A7AC0CB155B4957C6E2CA667E305C5518B4EDE354BB3B823C9123EE12AEB111DEA31139B9D2DE3109AA3531DF&sort=pdesc&rows=20&page=1&_type=query&q=TA%3A%28%E6%89%8B%E6%9C%BA%29+AND+%28AN%3A%28%E5%8D%8E%E4%B8%BA%29+OR+ANS%3A%28%E5%8D%8E%E4%B8%BA%29+OR+ANC%3A%28%E5%8D%8E%E4%B8%BA%29+OR+ANCS%3A%28%E5%8D%8E%E4%B8%BA%29%29+AND+PN%3A%28CN%29#1/4E0B8C97AACD861E10E0B5E17353BC5EF0B7A66E2B96223F17DD212A7AC0CB155B4957C6E2CA667E305C5518B4EDE354BB3B823C9123EE12AEB111DEA31139B9D2DE3109AA3531DF/detail-abst';
  var data = {
    "patentId": {
      "value":"CN108028904A",
      "color":color
    },
    "assigner": {
      "value":"华为技术有限公司",
      "color":color
    },
    "title":{
      "value":"移动设备上光场增强现实/虚拟现实的方法和系统",
      "color":color
    },
    "ptime": {
      "value":'2018-05-11',
      "color":color
    },
    "desc": {
      "value": desc||''
    }
  };
  wxapi.sendTemplate(msg.fromUserName, 't6RxLeRSF0EE2YNGhWERGyJ153teaxYlRFcc-C2S2zM', url, data, function(error, result) {
      weixin.sendSuccess();
  });
};

const send3 = function(msg, weixin, desc) {
  var url = 'https://analytics.zhihuiya.com/patent_view/view?patentId=F16F3CE1831AC47C702B96EBC5383EA2424B66C1FF5688C680A446DF9EAB1F1FC8FCAE11B431E5CB1AA2BD1159A3935143CF159FC921EA1141F89BFB40DE3158CD2E933B2EAD4604&sort=pdesc&rows=20&page=1&_type=query&q=TA%3A%28%E4%BA%BA%E5%B7%A5%E6%99%BA%E8%83%BD%29+AND+PN%3A%28CN%29#1/F16F3CE1831AC47C702B96EBC5383EA2424B66C1FF5688C680A446DF9EAB1F1FC8FCAE11B431E5CB1AA2BD1159A3935143CF159FC921EA1141F89BFB40DE3158CD2E933B2EAD4604/detail-abst';
  var data = {
    "patentId": {
      "value":"CN108062372A",
      "color":color
    },
    "assigner": {
      "value":"北京百度网讯科技有限公司",
      "color":color
    },
    "title":{
      "value":"基于人工智能的图像生成方法和装置",
      "color":color
    },
    "ptime": {
      "value":'2018-05-22',
      "color":color
    },
    "desc": {
      "value": desc||''
    }
  };
  wxapi.sendTemplate(msg.fromUserName, 'kJc654j69o204czo8oo4HFLyl2UkVuIwkn0JPFt7SFk', url, data, function(error, result) {
      weixin.sendSuccess();
  });
};

const send4 = function(msg, weixin, desc) {
  var url = 'https://analytics.zhihuiya.com/patent_view/view?patentId=F4F1958F987FEF7D843A902D17452CE9724CC18D093171AE31AE41BB9D0BC516C8FCAE11B431E5CB5733BE2CDEB847B754D3EF5313B10D28BE525574195597CF3BFD8648BAF6B8EC&sort=pdesc&rows=20&page=1&_type=query&q=%28AN%3A%28%E9%BB%98%E5%85%8B%29+OR+ANS%3A%28%E9%BB%98%E5%85%8B%29+OR+ANC%3A%28%E9%BB%98%E5%85%8B%29+OR+ANCS%3A%28%E9%BB%98%E5%85%8B%29%29+AND+PN%3A%28CN%29#1/F4F1958F987FEF7D843A902D17452CE9724CC18D093171AE31AE41BB9D0BC516C8FCAE11B431E5CB5733BE2CDEB847B754D3EF5313B10D28BE525574195597CF3BFD8648BAF6B8EC/detail-abst';
  var data = {
    "patentId": {
      "value":"CN105358552B",
      "color":color
    },
    "assigner": {
      "value":"默克专利股份公司",
      "color":color
    },
    "title":{
      "value":"芳基喹唑啉",
      "color":color
    },
    "ptime": {
      "value":'2018-04-27',
      "color":color
    },
    "desc": {
      "value": desc||''
    }
  };
  wxapi.sendTemplate(msg.fromUserName, '1Qw8BCLQq0vsB21GdvEU9F79r7USV_xvHmOvwDbk6MU', url, data, function(error, result) {
      weixin.sendSuccess();
  });
};

const send5 = function(msg, weixin, desc) {
  var url = 'https://analytics.zhihuiya.com/patent_view/view?patentId=121D74E7FB98A13180DC35B92ABFD772B02D8CD2AF6480E0EA2F2380A9C9B1782713736A5DA1AD65EBF870E25AF7E129112C36BDBAE4E80158C75E771DE3E341B3E679667E5D55EE&sort=pdesc&rows=20&page=1&_type=query&q=%28AN%3A%28%E6%89%AC%E5%AD%90%E6%B1%9F%E8%8D%AF%E4%B8%9A%E9%9B%86%E5%9B%A2%29+OR+ANS%3A%28%E6%89%AC%E5%AD%90%E6%B1%9F%E8%8D%AF%E4%B8%9A%E9%9B%86%E5%9B%A2%29+OR+ANC%3A%28%E6%89%AC%E5%AD%90%E6%B1%9F%E8%8D%AF%E4%B8%9A%E9%9B%86%E5%9B%A2%29+OR+ANCS%3A%28%E6%89%AC%E5%AD%90%E6%B1%9F%E8%8D%AF%E4%B8%9A%E9%9B%86%E5%9B%A2%29%29+AND+PN%3A%28CN%29#1/121D74E7FB98A13180DC35B92ABFD772B02D8CD2AF6480E0EA2F2380A9C9B1782713736A5DA1AD65EBF870E25AF7E129112C36BDBAE4E80158C75E771DE3E341B3E679667E5D55EE/detail-abst';
  var data = {
    "patentId": {
      "value":"CN104523584B",
      "color":color
    },
    "assigner": {
      "value":"扬子江药业集团有限公司",
      "color":color
    },
    "title":{
      "value":"一种地佐辛的注射剂及其制备方法",
      "color":color
    },
    "ptime": {
      "value":'2018-03-30',
      "color":color
    },
    "desc": {
      "value": desc||''
    }
  };
  wxapi.sendTemplate(msg.fromUserName, 'X_DJfqNodlB3zN1pq4ky54tdSA7Whg0yTA8pbGHgynw', url, data, function(error, result) {
      weixin.sendSuccess();
  });
};

ZKWechat.prototype.checkEmail = function(weixin, msg, type) {
  var self = this;
  WechatModel.checkEmail(msg.fromUserName, 
    (results) => {
      console.log(`results=${JSON.stringify(results)}`);
      if (results && results.email) {
        if (type === 'text') {
          resMsg = self.keyWordReply(msg, weixin);
          weixin.sendMsg(resMsg);
        } else if (type === 'click') {
          self.eventClickReply(msg, weixin);
        }
        return;
      }
      if (results && !results.email) {
        var reg = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
        if(reg.test(msg.content)) {
          results.email = msg.content;
          results.save(res=>true, err=>false);
          resMsg = {
              fromUserName: msg.toUserName,
              toUserName: msg.fromUserName,
              msgType: "text",
              content: `我们已经为您创建了免费账号***，密码：***，请登录：http://dev-analytics.patsnap.com。\n如果您要获得更长时间的试用，您可以分享您的链接：http://dev-analytics.patsnap.com/${msg.fromUserName}`,
              funcFlag: 0
          };
          weixin.sendMsg(resMsg);
        } else {
          // resMsg = {
          //     fromUserName: msg.toUserName,
          //     toUserName: msg.fromUserName,
          //     msgType: "text",
          //     content: "您关注的领域已经获取到专利信息了，请输入您的Email获取信息",
          //     funcFlag: 0
          // };
          // weixin.sendMsg(resMsg);
          if (type === 'text') {
            self.keyWordReply(msg, weixin, needEmail);
          } else if (type === 'click') {
            self.eventClickReply(msg, weixin, needEmail);
          }
          // resMsg = self.keyWordReply(msg, weixin, needEmail);
          // weixin.sendMsg(resMsg);
        }
      } else if (results){
        // resMsg = {
        //     fromUserName: msg.toUserName,
        //     toUserName: msg.fromUserName,
        //     msgType: "text",
        //     content: "您关注的领域已经获取到专利信息了，请输入您的Email获取信息",
        //     funcFlag: 0
        // };
        // weixin.sendMsg(resMsg);
        self.keyWordReply(msg, weixin, needEmail);
      } else {
        const model = new WechatModel();
        model.openid = msg.fromUserName;
        model.email='';
        model.status = 1;
        model.save(res=>true, err=>false);
        // resMsg = {
        //     fromUserName: msg.toUserName,
        //     toUserName: msg.fromUserName,
        //     msgType: "text",
        //     content: "您关注的领域已经获取到专利信息了，请输入您的Email获取信息",
        //     funcFlag: 0
        // };
        // weixin.sendMsg(resMsg);
        self.keyWordReply(msg, weixin, needEmail);
      }
    }, 
    (err) => {
      console.log(`err=${JSON.stringify(err)}`);
    });
};

ZKWechat.prototype.handleMsg = function(weixin, msg) {
    var resMsg = {};
    switch (msg.msgType) {
        //文本
        case "text":
        default:
            this.checkEmail(weixin, msg, 'text');
              // resMsg = this.keyWordReply(msg);
              // weixin.sendMsg(resMsg);
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
                case "subscribe":
                    resMsg = {
                      fromUserName: msg.toUserName,
                      toUserName: msg.fromUserName,
                      msgType: "text",
                      content: "您好，欢迎您关注智慧芽。\n您对您所在的领域的专利信息有想要更深入的了解吗？可以输入下方对应领域的序号，就可以得到更多的信息。\n\n"+menuStr,
                      funcFlag: 0
                    };
                    weixin.sendMsg(resMsg);
                    break;
                case "CLICK":
                    this.checkEmail(weixin, msg, 'click');
                    // resMsg = this.eventClickReply(msg, weixin, 'click');
                    break;
            }
            break;
    }
};

ZKWechat.prototype.keyWordReply = function(msg, weixin, needEmail) {
    var resMsg = {};
    //关键字回复
    switch (msg.content) {
        case "1":
            // 返回文本消息
            // resMsg = {
            //     fromUserName: msg.toUserName,
            //     toUserName: msg.fromUserName,
            //     msgType: "text",
            //     content: "这是文本回复\n换行了",
            //     funcFlag: 0
            // };
            send1(msg, weixin, needEmail);
            break;
        case "2":
            send2(msg, weixin, needEmail);
            break;
        case "3":
            send3(msg, weixin, needEmail);
            break;
        case "4":
            send4(msg, weixin, needEmail);
            break;
        case "5":
            send5(msg, weixin, needEmail);
            break;
        default:
            resMsg = {
                fromUserName: msg.toUserName,
                toUserName: msg.fromUserName,
                msgType: "text",
                content: menuStr,
                funcFlag: 0
            };
            weixin.sendMsg(resMsg);
            break;
    }
    return resMsg;
};

ZKWechat.prototype.eventClickReply = function(msg, weixin, needEmail) {
    var resMsg = {};
    switch (msg.eventKey) {
        case "event_lucky":
            // var url = 'http://baidu.com';
            // var data = {
            //   "patentId": {
            //     "value":"WO2018053885A1",
            //     "color":color
            //   },
            //   "title":{
            //     "value":"PREPARATION METHOD FOR AND USE OF ENHANCED SLIT2 CAR-T CELL AND CAR-NK CELL",
            //     "color":color
            //   },
            //   "time": {
            //     "value":moment().format('YYYY-MM-DD HH:mm:ss'),
            //     "color":color
            //   }
            // };
            // wxapi.sendTemplate(msg.fromUserName, 'nhivqpUJygwB30MVsePhW3VPyIRHTHmy3SgKMJbFjKg', url, data, function(error, result) {
            //     console.log(error);
            //     console.log(result);
            //     weixin.sendSuccess();
            // });
            send1(msg, weixin, needEmail);
            break;
        case "event_jixie":
            // resMsg = {
            //     fromUserName: msg.toUserName,
            //     toUserName: msg.fromUserName,
            //     msgType: "text",
            //     content: "你点击了机械行业",
            //     funcFlag: 0
            // };
            // weixin.sendMsg(resMsg);
            send1(msg, weixin, needEmail);
            break;
        case "event_dianxue":
            send2(msg, weixin, needEmail);
            break;
        case "event_tongxun":
            send3(msg, weixin, needEmail);
            break;
        case "event_huaxue":
            send4(msg, weixin, needEmail);
            break;
        case "event_yiyao":
            send5(msg, weixin, needEmail);
            weixin.sendMsg(resMsg);
            break;
        default:
            resMsg = {
                fromUserName: msg.toUserName,
                toUserName: msg.fromUserName,
                msgType: "text",
                content: "欢迎关注智慧芽",
                funcFlag: 0
            };
            weixin.sendMsg(resMsg);
            break;
    }
};

ZKWechat.prototype.subscribeEvent = function(wechatModel) {
  var self = this;
  // 监听文本消息
  wechatModel.textMsg(function(msg) {
    self.handleMsg(wechatModel, msg);
  });

  // 监听图片消息
  wechatModel.imageMsg(function(msg) {
    self.handleMsg(wechatModel, msg);
  });

  // 监听位置消息
  wechatModel.locationMsg(function(msg) {
    self.handleMsg(wechatModel, msg);
  });

  // 监听链接消息
  wechatModel.urlMsg(function(msg) {
    self.handleMsg(wechatModel, msg);
  });

  // 监听事件消息
  wechatModel.eventMsg(function(msg) {
    self.handleMsg(wechatModel, msg);
  });
};

module.exports = new ZKWechat();
