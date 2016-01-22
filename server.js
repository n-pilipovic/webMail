/**
 * Created by novica on 14.1.16..
 */
var fs = require('fs');
var https = require('https');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var RestClient = require('node-rest-client').Client;

var config = require('./config');

var token_uri = 'https://www.googleapis.com/oauth2/v4/token';
var redirect_uri = 'https://localhost:8080/api/googleAuthCallback';
var tokenData = ''.concat('redirect_uri=', redirect_uri, '&grant_type=authorization_code', '&client_id=', config.google.client_id, '&client_secret=', config.google.client_secret);


var router = express.Router();

var googleAccessToken = null;

app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/webMailApp', express.static(__dirname + '/webMailApp'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

// Allow CORS
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// mount the router on the app
app.use('/api', router);

app.use(errorHandler({
    dumpExceptions: true,
    showStack: true
}));

app.get('/webMailApp', function (req, res) {
    googleAccessToken = null;
    res.redirect('/index.html');
});

// Router for small API
router.get('/googleAuthCallback', function(req, res, next) {
    console.log(req.query.code);
    tokenData = tokenData.concat('&code=', req.query.code);

    // prepare header
    var googleHeader = {
        'Content-Type' : 'application/x-www-form-urlencoded'
    }
    // the post options
    var optionsPost = {
        data: tokenData,
        headers : googleHeader
    };

    var restClient = new RestClient();

    if (googleAccessToken === null) {
        restClient.post('https://www.googleapis.com/oauth2/v4/token', optionsPost, function(data, response) {
            console.log('POST result:\n', data);
            googleAccessToken = data.access_token;
            res.redirect('https://localhost:8080/webMailApp/');
        });
    } else {
        googleAccessToken = null;
        res.redirect('https://localhost:8080/webMailApp/');
    }
});
router.get('/googleAuthCode', function(req, res, next) {
   res.json({access_token: googleAccessToken});
});

https.createServer({
    key: fs.readFileSync('./certificates/localhost-key.pem'),
    cert: fs.readFileSync('./certificates/localhost-cert.pem')
}, app).listen(8080);

console.log("Simple static server showing /webMailApp listening at https://localhost:%s", '8080');