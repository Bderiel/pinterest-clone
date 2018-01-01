const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const bcrypt = require('bcrypt-nodejs');

const { Schema } = mongoose;

const userSchema = new Schema({
  name: { type: String, required: true, unique: true },
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  boards: [{ // embedded document
    title: { type: String, required: true },
    description: { type: String, required: true },
    pins: [{ type: Schema.Types.ObjectId, ref: 'pin' }], // pins are by reference
  }],
});

// check if username / email are unique
userSchema.plugin(uniqueValidator);
// methods ======================
// generating a hash
userSchema.methods.generateHash = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

// checking if password is valid
userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


const User = mongoose.model('user', userSchema);

module.exports = User;
