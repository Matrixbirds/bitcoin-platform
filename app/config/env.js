'use strict';
const APP_ENV = {};
const path = require('path');

const kit = require('../kit');
const nconf = require('nconf');
nconf
  .file({
    file: path.join(__dirname, '_settings.yaml'),
    format: require('nconf-yaml')
  })
  .env()
  .defaults(APP_ENV);
module.exports = nconf.get(process.env.NODE_ENV || 'development');
