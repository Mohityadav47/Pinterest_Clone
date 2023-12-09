const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  imageText: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },

  user:{

    type: mongoose.Schema.Types.ObjectId,
    ref:'User'
  },
  currentDate: {
    type: Date,
    default: Date.now,
  },
  time: {
    type: String,
    // You might want to use a specific date/time library or format it accordingly
  },
  likes: {
    type: Array,
    default: [],
  },
});

module.exports  = mongoose.model('Post', postSchema);