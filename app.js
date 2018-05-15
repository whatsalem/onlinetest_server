var express = require('express')
,app = express()

app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "*");
	res.header("Access-Control-Allow-Methods", "*");
	next(); 
});
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
require('./routes')(app);
module.exports = app;
