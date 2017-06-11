'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');

if (process.env.NODE_ENV != 'test') app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World');
});

if (!module.parent)
  app.listen(4399);
else {
  const expose = Object.assign;
  const kit = require('./kit');
  const [fs, path] = [require('fs'), require('path')];
  const db = require('./db')({fs, path});
  kit.expose(app, {db});
  const config = require('./config');
  module.exports = {
    ['env']: process.env,
    kit,
    app,
    config
  };
}
