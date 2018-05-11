var express = require('express');
var request = require('request');
var bodyParser = require('body-parser');
var fs = require('fs');
var Log = require('log');
var log = new Log();
// var util = require('util');
var query = require('./mysql-pool');

var app = express();

// var mysql      = require('mysql');
// var connection = mysql.createConnection({
//   host     : 'localhost',
//   port     : '3306',
//   user     : 'root',
//   password : 'root',
//   database : 'steel'
// });
 
// connection.connect();

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
        query("select * from t_user where id=?", [4], function(err,results,fields){  
            //do something  
            res.json(results);
        });
        // res.json({ message: 'get a bear' });
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

// app.get('/gtest', function(req, res) {
//     console.log('cloud');
//     //log.debug(req.query);
//     log.error('cloud');
//     log.debug(req.body);
//     log.debug(req.params);
//     // res.status(200).send('get cloud');
 
//     connection.query('SELECT * from t_user', function (error, results, fields) {
//     if (error) throw error;
//         // console.log('The solution is: ', results);
//         res.status(200).send(results);
//     });
    
//     // connection.end();
// });

app.use('/api', router);

process.on('uncaughtException', function(error) {
    log.error("uncaughtException:" + error);
});

app.listen(4200, function() {
    log.debug("listen 3000...");
});
