'use strict';
const express = require('express');
const app = express();
const morgan = require('morgan');
const Util = require('util');

if (process.env.NODE_ENV != 'test') app.use(morgan('dev'));

app.get('/', function (req, res) {
  res.send('Hello World');
});

if (!module.parent)
  app.listen(4399);
else {
  const expose = Object.assign;
  const util = expose({}, Util);
  const kit = {
    util,
    expose
  };
  module.exports = {
    ['env']: process.env,
    kit,
    app
  };
}
