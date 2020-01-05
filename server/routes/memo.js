var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var memoSchema = new Schema({
  key: String,
  writer: String,
  title: String,
  content: String,
  color: String,
  date: String
});

module.exports = mongoose.model("memo", memoSchema);
