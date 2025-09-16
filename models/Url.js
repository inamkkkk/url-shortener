const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
  longUrl: {
    type: String,
    required: true
  },
  shortUrl: {
    type: String,
    required: true
  },
  urlCode: {
    type: String,
    required: true
  },
  date: {
    type: String,
    default: Date.now
  },
 clicks: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model('Url', urlSchema);