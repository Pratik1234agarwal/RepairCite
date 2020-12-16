const express = require('express');
const router = express.Router();
const Phones = require('../models/Phones');
const auth = require('../middleware/auth');

router.get('/', async (req, res) => {
  try {
    const phones = await Phones.find();
    res.json({ phones });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const phone = await Phones.findById(req.params.id);
    console.log(phone);
    if (!phone) {
      return res.status(400).json({ msg: 'No Such Phone Exist' });
    }
    res.send(phone);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
});

router.delete('/:id', auth, async (req, res) => {
  try {
    const phone = await Phones.findByIdAndDelete(req.params.id);
    res.json({ msg: 'Phone Deleted Successfully' });
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
});

router.post('/edit/:id', auth, async (req, res) => {
  try {
    const newPhone = req.body.phone;
    if (!newPhone) {
      return res
        .status(400)
        .json({ err: 'Please Provide a body to the request' });
    }
    let phone = await Phones.findByIdAndUpdate(req.params.id, {
      $set: newPhone,
    });
    // if (!phone) {
    //   return res.status(400).json({ err: 'No Such Phone Found' });
    // }
    // phone = new Phones({ ...phone, ...req.body.phone });
    // await phone.save();
    res.send(phone);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
});

module.exports = router;
