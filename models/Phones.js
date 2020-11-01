const mongoose = require('mongoose');

const PhoneSchema = mongoose.Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  screen: {
    type: Number,
  },
  charging: {
    type: Number,
  },
  battery: {
    type: Number,
  },
  color: [
    {
      name: {
        type: String,
        required: true,
      },
      code: {
        type: String,
        required: true,
      },
    },
  ],
});

module.exports = mongoose.model('phones', PhoneSchema);
