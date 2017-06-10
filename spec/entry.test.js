'use strict';
const mocha = require('mocha');
const {app, kit} = require('../app');
const request = require('supertest');

const chai = require('chai');
global.expect = require('chai').expect;

require('co-mocha');
describe('first test', function () {
  var response;
  beforeEach('send request', function *() {
    response = yield request(app).get('/');
  });
  it('should response 200', function *() {
    expect(response.status).to.be.ok;
  });
  it('should response Hello World', function *() {
    expect(response.text).to.be.equal('Hello World');
  });
});
