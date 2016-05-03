const express = require('express');
const path = require('path')
const api = require('./api');

const app = express();
const API_PORT = 8000

app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/api', api);
app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});


// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err,
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {},
  });
});

app.listen(API_PORT, () => {
  console.log(
    `API Server is now running on http://localhost:${API_PORT}`
  );
})
