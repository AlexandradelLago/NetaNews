const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const ArticleSchema = new Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  subhead: {
    type: String,
    required: [true, "Title is required"]
  },
  content: {
    type: String,
    required: [true, "Content is required"]
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Article', ArticleSchema);
