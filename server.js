var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');


var app = express();
app.set('port', 8080);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/public'));


app.listen(app.get('port'), function() {
  console.log('Server listening on port', app.get('port'));
});
