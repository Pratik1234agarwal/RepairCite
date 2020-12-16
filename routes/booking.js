const express = require('express');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const Booking = require('../models/Booking');
const auth = require('../middleware/auth');
const mail = require('../mailer');

router.post(
  '/',
  [
    check('type', 'Type is required').not().isEmpty(),
    check('modelName', 'Model Name is required').not().isEmpty(),
    check('phone', 'Phone is required').not().isEmpty(),
    check('address', 'Address is required').not().isEmpty(),
    check('timeSlot', 'TimeSlot is required').not().isEmpty(),
    check('date', 'Date is required').not().isEmpty(),
    check('pincode', 'Pincode is required').not().isEmpty(),
    check('price', 'Price is required').not().isEmpty(),
    check('color', 'Pick a color for the device').not().isEmpty(),
  ],
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array()[0].msg });
    }
    const {
      type,
      phone,
      modelName,
      address,
      date,
      pincode,
      price,
      additionInfo,
      timeSlot,
    } = req.body;

    try {
      let order = await Booking.findOne({ phone, type, modelName, date });
      if (order) {
        return res.status(400).json({
          err: 'A similar order already exists by your phone,on the same date ',
        });
      }
      order = new Booking(req.body);
      mail(order);
      await order.save();
      res.json(order);
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: 'Internal Server Error' });
    }
  }
);

router.get('/get/all', auth, async (req, res) => {
  console.log('request received');
  try {
    const booking = await Booking.find();
    console.log(booking);
    res.send(booking);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const id = req.params.id;
    await Booking.findByIdAndDelete(id);
    res.json({ msg: 'Server Deleted' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
});

module.exports = router;
