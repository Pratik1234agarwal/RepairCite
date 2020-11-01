const express = require('express');
const { check, validationResult } = require('express-validator');
const jwt = require('jsonwebtoken');
const config = require('config');
const router = express.Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const auth = require('../middleware/auth');
const Phones = require('../models/Phones');

// route POST /auth/login
// des - to authenticate the admin user
// access - public
router.post(
  '/login',
  [
    check('email', 'Email is required').not().isEmpty().isEmail(),
    check('password', 'Password is required').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array()[0].msg });
    }
    try {
      const { email, password } = req.body;

      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ err: 'Invalid Credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        res.status(400).json({ err: 'Invalid Credentials' });
      }

      const payload = {
        user: {
          id: user._id,
        },
      };

      //Return JWT Token
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) {
            throw err;
          }
          return res.json({ token });
        }
      );
    } catch (err) {
      console.log(err);
      res.status(500).json({ err: 'Internal Server Error' });
    }
  }
);

// route POST /auth/create
// des - create a new phone to add to the selection
// access - Protected
router.post(
  '/create',
  [
    auth,
    [
      check('code', 'Enter a phone code').not().isEmpty(),
      check('name', 'Name is required').not().isEmpty(),
      check('screen', 'Enter a valid screen price').isNumeric(),
      check('charging', 'Enter a valid charging port price').isNumeric(),
      check('color', 'Enter a valid color for the phone').isArray(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ err: errors.array()[0].msg });
    }
    const { code, name, screen, charging, color } = req.body;
    console.log(color);
    const phone = {
      code,
      name,
      color,
    };
    console.log(phone);

    if (screen) phone.screen = screen;
    if (charging) phone.charging = charging;
    try {
      const phoneSaved = new Phones(phone);
      await phoneSaved.save();
      console.log(phoneSaved);
      res.json(phoneSaved);
    } catch (err) {
      res.send(500).json('Internal Server Error');
    }
  }
);

// temp route to create a admin user.
router.get('/create/dothis/admin', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = new User({
      email,
      password,
    });

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(password, salt);

    await user.save();
    res.json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({ err: 'Internal Server Error' });
  }
});

module.exports = router;
