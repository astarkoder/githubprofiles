var express = require('express');
var app = express();

app.set('port', 8080);
app.use(express.static(__dirname + '/public'));

app.listen(app.get('port'), function() {
  console.log('Server listening on port', app.get('port'));
});
