var express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	gmailAPI = require('./googleAPI/gmailAPI');
	
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

var router = express.Router();

router.use(function(req, res, next) {
	console.log(req);
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

router.get('/', function(req, res) {
	res.json({message: 'Hello from nodejs API!'});
});

router.get('/labels', function(req, res) {
	gmailAPI.getAllLabels(function(data) {
		console.log(data);
		res.json(data);
	});
})

app.use('/api', router);

app.listen(port);
console.log('Server started on port: ' + port);