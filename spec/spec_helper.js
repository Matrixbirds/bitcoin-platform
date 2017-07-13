'use strict';
const mocha = require('mocha');
const {app, kit} = require('../app');
const request = require('supertest');
const chai = require('chai');
const factories = require('chai-factories');
const mongoose = require('mongoose');
chai.use(factories);
require('./factories')({ chai, mongoose });
global.expect = chai.expect;
require('co-mocha');
kit.expose(global, {
  expect,
  app,
  request,
  kit,
});
process.env.NODE_ENV='test';
console.log('you are loading spec_helper');
