var express = require('express');
var LiuyanModel = require('./models/liuyan.model');

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    // console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
});

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