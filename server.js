//var express = require('express');
//
//var app = express();
//
//app.set('port', (process.env.PORT || 3000));
//
//app.use('/', express.static(__dirname));
//
//app.listen(app.get('port'), function() {
//  console.log('Server started: http://localhost:' + app.get('port') + '/');
//});

var express = require('express');

var app = express();
const PORT = process.env.PORT || 3000;

app.use(function (req, res, next){
  if (req.headers['x-forwarded-proto'] === 'https') {
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function () {
  console.log('Express server is up on port ' + PORT);
});
