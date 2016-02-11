/**
 * Created by novica on 14.1.16..
 */
var fs = require('fs');
var jwt = require('jsonwebtoken');
var https = require('https');
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var RestClient = require('node-rest-client').Client;

var config = require('./config');
var serverPort = 8080;

var token_uri = 'https://www.googleapis.com/oauth2/v4/token';
var redirect_uri = 'https://localhost:8080/api/googleAuthCallback';
var tokenData = ''.concat('redirect_uri=', redirect_uri, '&grant_type=authorization_code', '&client_id=', config.google.client_id, '&client_secret=', config.google.client_secret, '&prompt=consent');

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

var options = {
    key: fs.readFileSync('./certificates/localhost-key.pem'),
    cert: fs.readFileSync('./certificates/localhost-cert.pem')
};

var server = https.createServer(options, app);
server.listen(serverPort, function() {
    console.log("Simple static server showing /webMailApp listening at https://localhost:%s", serverPort);
});

var socketio = require('socket.io')(server);
// Create separate namespace only for socket calls
var appIO = socketio.of('/socketAPI');
appIO.on('connection', function(socket) {
    console.log('webMailApp connected to socket!');
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
    console.log('Request query: ', req.query);
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
            console.log('Token data recieved from Google: ', jwt.decode(data.id_token));
            var tokenParsed = jwt.decode(data.id_token);
            var expDate = new Date(tokenParsed.exp * 1000);
            var nowDate = new Date();
            console.log('Expiration token date: ', expDate);
            console.log('Current date: ', nowDate);
            appIO.emit('accessTokenRecieved', {access_token: googleAccessToken});
            res.redirect('https://localhost:' + serverPort + '/webMailApp/');
        });
    } else {
        googleAccessToken = null;
        res.redirect('https://localhost:' + serverPort + '/webMailApp/');
    }
});
router.get('/googleAuthCode', function(req, res, next) {
   res.json({access_token: googleAccessToken});
});