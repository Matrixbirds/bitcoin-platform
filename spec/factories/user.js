'use strict';
module.exports = (chai, ObjectId) => {
  const key = Date.now()
  chai.factory('user', {
    _id: ObjectId(key),
    firstName: 'Matrix',
    lastName: 'birds',
    createdAt: key,
    updatedAt: key,
  })
}
