'use strict';
module.exports = (mongoose, User) => {
  const schema = new mongoose.Schema({
    account: String
  });
  const Admin = User.discriminator('admin',
    schema,
  );
}
