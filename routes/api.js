const express = require('express');
const router = express.Router();
const Phones = require('../models/Phones');

router.get('/', async (req, res) => {
  try {
    const phones = await Phones.find();
    res.json({ phones });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: 'Internal Server Error' });
  }
});

module.exports = router;
