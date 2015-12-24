var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	gmailAPI = require('./googleAPI/gmailAPI');
	
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(gmailAPI.passport.initialize());
app.use(gmailAPI.passport.session());

var port = process.env.PORT || 3000;

var router = express.Router();

router.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	next();
});

router.get('/', 
            function(req, res) {
	           res.json({message: 'Hello from nodejs API!', user: req.user});
            });

router.get('/login', 
            function(req, res) {
	           res.json({user: req.user});
            });

router.get('/auth/google', 
            gmailAPI.handleAuthenticateUser(), 
            function(req, res){
                
            });

router.get('/auth/google/callback', 
            gmailAPI.handleAuthenticateUserCallback(), 
            function(req, res) { 
                gmailAPI.streamGmailInbox();
                console.log(req.user);
                res.json({user: req.user});
            });


app.use('/api', router);

app.listen(port);
console.log('Server started on port: ' + port);


function ensureAuthenticated(req, res, next) {
    if(req.isAuthenticated()) {
        return next();
    }
    res.redirect('/login');
}