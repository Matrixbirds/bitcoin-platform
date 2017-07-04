'use strict';
const merge = Object.assign;
const env = require('../config/env');
module.exports = error;

function serializeError(props) {
  const _props = {};
  if (!props.status) props.status = '500';
  if (env.isProduction()) {
    delete props.stack;
  }
  merge(_props, props);
  return _props;
}

function error(props) {
  if (props instanceof Promise) {
    return props.catch(handlePromiseError.bind(null, props));
  }
  return serializeError(props);
}

function handlePromiseError(rejected) {
  return serializeError(rejected);
}
