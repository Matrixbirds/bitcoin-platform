'use strict';
const mocha = require('mocha');
const {app, kit} = require('../app');
const request = require('supertest');
const chai = require('chai');
global.expect = require('chai').expect;
require('co-mocha');
kit.expose(global, {
  expect,
  app,
  request,
  kit
});
process.env.NODE_ENV='test';
console.log('you are loading spec_helper');
