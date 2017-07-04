'use strict';

require('./spec_helper');
const error = kit.errorHandle;

describe('error handling', function () {
  function triggerSyncError() {
    throw {
      msg: 'params missing',
      stack: 'stack params missing',
      status: '422'
    };
  }
  it ('handle sync error', function () {
    try {
      triggerSyncError();
    } catch(err) {
      let output = error(err);
      expect(output).to.have.property('msg', 'params missing');
      expect(output).to.have.property('stack', 'stack params missing');
      expect(output).to.have.property('status', '422');
    }
  });

  function triggerAsyncError() {
    return Promise.reject({
      msg: 'params missing',
      stack: 'stack params missing',
      status: null,
    });
  }
  let output;
  before(function (){
    triggerAsyncError()
      .catch(err => {
        output = error(err);
      })
  });
  it ('handle async error', function () {
    console.log('output', output);
    expect(output).to.have.property('msg', 'params missing');
    expect(output).to.have.property('stack', 'stack params missing');
    expect(output).to.have.property('status', '500');
  });
});
