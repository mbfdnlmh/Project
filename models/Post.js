const mongoose = require('mongoose');

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  date: {
    type: Date
  },

});

module.exports = Post = mongoose.model('пост', PostSchema)