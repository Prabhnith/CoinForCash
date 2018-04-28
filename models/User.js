var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({
  name: { type: String, required: true },
  mobile: { type: Number, required: true, unique: true },
  amount: { type: [Number], required: true },
  email: { type: String, required: true, unique: false },
  count: { type: Number, default: 0 },
  date_created: { type: Date, default: Date.now }
});

var User = mongoose.model('User', userSchema);

module.exports = User;