var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var fs = require('fs');
var Log = require('log');
var log = new Log();
// var query = require('./models/mysql-pool');

var app = express();

app.use(bodyParser.json({
    limit: '5mb'
}));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true,
    limit: '5mb'
}));
//app.use(bodyParser.limit(100000000));

var router = express.Router();

// middleware to use for all requests
router.use(function(req, res, next) {
    // do logging
    console.log('Something is happening.');
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

router.route('/bears')
    // create a bear (accessed at POST http://localhost:8080/api/bears)
    .post(function(req, res) {
        log.info(req.body.name);
        res.json({ message: 'post bears' });
        // var bear = new Bear();      // create a new instance of the Bear model
        // bear.name = req.body.name;  // set the bears name (comes from the request)

        // save the bear and check for errors
        // bear.save(function(err) {
        //     if (err)
        //         res.send(err);
        //     res.json({ message: 'Bear created!' });
        // });
    })
    .get(function(req, res) {
        res.json({ message: 'get bears' });
    });

router.route('/bears/:bear_id')

    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
        var ConfigModel = require('./models/config.model');
        var configModel = new ConfigModel();
        configModel.field = 'store_num';
        configModel.getConfig(results => response(res, results), err => response(res, null, err));
    })

    // update the bear with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
    .put(function(req, res) {
        res.json({ message: 'put a bear' });
    })

    // delete the bear with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
    .delete(function(req, res) {
        // Bear.remove({
        //     _id: req.params.bear_id
        // }, function(err, bear) {
        //     if (err)
        //         res.send(err);

        //     res.json({ message: 'Successfully deleted' });
        // });
        res.json({ message: 'delete a bear' });
    });

router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });   
});

app.use('/api', router);

process.on('uncaughtException', function(error) {
    log.error("uncaughtException:" + error);
});

app.listen(4200, function() {
    log.debug("listen 4200...");
});
