var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var WinnersSchema = new Schema({
  name: { type: String, required: true },
  mobile: { type: Number, required: true },
  amount: { type: Number, required: true },
  email: { type: String, required: true },
  date_created: { type: Date, default: Date.now } 
});

var Winners = mongoose.model('Winners', WinnersSchema);

module.exports = Winners;