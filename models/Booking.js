const mongoose = require('mongoose');

const BookingSchema = mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  modelName: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  timeSlot: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  pincode: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  additionInfo: {
    type: String,
  },
});

module.exports = mongoose.model('booking', BookingSchema);
