'use strict';

module.exports = ({chai, mongoose}) => {

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
        res[name] = _module(chai, mongoose.Types.ObjectId);
        return res;
      }, db);
    return db;
  };

  return meta({ fs: require('fs'), path: require('path') });
}
