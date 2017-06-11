'use strict';
const mongoose = require('mongoose');
const bluebird = require('bluebird');
const {env} = require('../config');

mongoose.Promise = bluebird;
mongoose.connect(env.database.entry, {
  promiseLibrary: bluebird
});

const {connection} = mongoose;

connection.on('error', console.error.bind(console, 'connection error:'));
connection.once('open', () => {
  console.log('connected');
});

function fileFormat(format) {
  const {excludeFile} = this;
  return (
    file => (
      ((file !== excludeFile) && (file.indexOf('.') !== 0) && (file.slice(-format.length) === format))
    )
  );
}

const meta = ({fs, path}) => {
  const current = {
    dir: path.join(__dirname),
    file: path.basename(__filename)
  } ;
  const db = {};
  fs.readdirSync(current.dir)
    .filter(fileFormat.bind({excludeFile: current.file})('.js'))
    .reduce((res, file) => {
      const _module = require(path.join(current.dir, file));
      const name = path.basename(file).split('.js')[0];
      res[name] = _module;
      return res;
    }, db);
  return db;
};

module.exports = meta;
