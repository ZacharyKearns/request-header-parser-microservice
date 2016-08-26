var express = require('express');
var app = express();

app.use(express.static(__dirname + '/static'));

app.set('port', (process.env.PORT || 5000));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
  res.render('index');
});

app.listen(app.get('port'), function () {
  console.log('App listening on port ' + app.get('port'));
});
