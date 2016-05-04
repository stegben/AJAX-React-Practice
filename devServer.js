var path = require('path');
var express = require('express');
var webpack = require('webpack');
var config = require('./webpack.config.dev');

var app = express();
var compiler = webpack(config);

var api = require('./server/api')

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));
app.use('/api', api);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
  //res.sendFile(path.join(__dirname, 'style.css'));
  //res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(3000, 'localhost', function(err) {
  if (err) { return console.log(err); }
  console.log('Listening at http://localhost:3000');
});
