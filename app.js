var express = require('express');
var bodyParser = require('body-parser');
var routers = require('./routers');
var app = express();
var path = require('path');
var port = process.env.PORT || 3000;

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname + '/public')));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());

app.use('/', routers);

app.listen(port);