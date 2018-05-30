var express = require('express');
// var request = require('request');
var bodyParser = require('body-parser');
// var fs = require('fs');
var multer  = require('multer');
var Log = require('log');
var log = new Log();
var router = require('./router');

var app = express();
app
.use(bodyParser.json({
    limit: '5mb'
}))
.use(bodyParser.urlencoded({
    extended: true,
    limit: '5mb'
}))
.use(multer({ dest: 'file/admin/' }).single('file'))
.use('/api', router);

process.on('uncaughtException', function(error) {
    log.error("uncaughtException:" + error);
});

app.listen(4200, function() {
    log.debug("listen 4200...");
});
