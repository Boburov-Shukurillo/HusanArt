const { Schema, model } = require("mongoose");

const ArtModel = new Schema({
  title: {
    type: String,
    required: true,
    minilength: 3,
  },
  desc: {
    type: String,
    required: true,
    minilength: 3,
  },
  img_url: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
    miniraiting: 2,
  },
});

module.exports = model('ArtModel', ArtModel);
