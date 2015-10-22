var mongoose = require('mongoose');
var uuid = require('uuid');

var binSchema = new mongoose.Schema({
  author: String,
  hash: { type: String, default: uuid.v4, unique: true},
  content: String,
  uid: String,
  visibility: String
});

module.exports = mongoose.model('Bin', binSchema);
