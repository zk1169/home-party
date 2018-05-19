var express = require('express');
var LiuyanModel = require('./models/liuyan.model');
var base64encode = require('./base64-code');
var config = require('./config/config.json');

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
    if (req.originalUrl === '/api/login') {
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

router.route('/login')
    .post((req, res) => {
        const userName = req.body.userName;
        const userPwd = req.body.userPwd;
        if (userName === config.adminName && userPwd === config.adminPwd) {
            res.cookie(config.cookieLoginName, config.cookieLoginValue, { maxAge: 900000, httpOnly: true })
            response(res, true);
        } else {
            response(res, false);
        }
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