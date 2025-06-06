const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
  gender: String,
  location: String,
}, { timestamps: true });

module.exports = mongoose.model('User', userSchema);
