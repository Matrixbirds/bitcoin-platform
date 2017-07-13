'use strict';
module.exports = (chai, ObjectId) => {
  const key = Date.now();
  chai.factory('admin', {
    _id: ObjectId(key),
    firstName: 'Matrix',
    lastName: 'birds',
    account: 'admin',
    createdAt: key,
    updatedAt: key,
  })
}
