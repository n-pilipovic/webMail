/**
 * Created by novica on 14.1.16..
 */
var fs = require('fs');
var https = require('https');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');

var router = express.Router();

var googleCode = null;

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/webMailApp', express.static(__dirname + '/webMailApp'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// mount the router on the app
app.use('/api', router);

app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

app.get('/webMailApp', function (req, res) {
    res.redirect('/index.html');
});

// Router for small API
router.get('/googleAuthCallback', function(req, res, next) {
    console.log(req.query.code);
    googleCode = req.query.code;
    res.redirect('https://localhost:8080/webMailApp/');
});
router.get('/googleAuthCode', function(req, res, next) {
   res.json({code: googleCode});
});

https.createServer({
    key: fs.readFileSync('./certificates/localhost-key.pem'),
    cert: fs.readFileSync('./certificates/localhost-cert.pem')
}, app).listen(8080);

console.log("Simple static server showing /webMailApp listening at https://localhost:%s", '8080');