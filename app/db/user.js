'use strict';
module.exports = mongoose => {
  const schema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    registerAt: Date,
  }, {
    timestamps: true,
    discriminatorKey: 'class'
  });


  function procfullName(fullname) {
    const firstSpace = fullname.indexOf(' ');
    this.firstName = fullname.split(' ')[0];
    this.lastName = firstSpace === -1 ? '' : fullname.substr(firstSpace + 1);
  };

  class UserClass {
    get fullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    set fullname(val) {
      procFullName.call(this, val);
    }

    getFullName() {
      return `${this.firstName} ${this.lastName}`;
    }

    static findByFullName(name) {
      const props = {};
      procFullName.call(props, val);
      const { firstName, lastName } = props;
      return this.findOne({ firstName, lastName });
    }
  }

  schema.loadClass(UserClass);
  const User = mongoose.model('user', schema);
  require('./user/admin.js')(mongoose, User);
  return User;
}
