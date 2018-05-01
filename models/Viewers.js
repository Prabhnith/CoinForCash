var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ViewerSchema = new Schema({
  count: { type: Number, default:10000 },
});

var Viewer = mongoose.model('Viewer', ViewerSchema);

module.exports = Viewer;