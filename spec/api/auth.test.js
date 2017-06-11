'use strict';
const request = require('supertest');

require('spec_helper');
describe('Auth', function() {
  context('GET /api/auth', function () {
    beforeEach(function *() {
      console.log('cool', yield Promise.resolve(1));
    });
    it ('pending', function () {
      console.log('pending');
    });
  });
  context('POST /api/auth', function () {
  });
});
