const Phone = require('./models/Phones');
const connectDB = require('./config/db');
const Booking = require('./models/Booking');
connectDB();

const value = [
  {
    code: '6',
    price: 49.99,
  },
  {
    code: '6s',
    price: 49.99,
  },
  {
    code: '6sp',
    price: 59.99,
  },
  {
    code: '7',
    price: 59.99,
  },
  {
    code: '7p',
    price: 59.99,
  },
  {
    code: '8p',
    price: 59.99,
  },
  {
    code: 'x',
    price: 69.99,
  },
  {
    code: 'xs',
    price: 79.99,
  },
  {
    code: 'xsm',
    price: 89.99,
  },
  {
    code: 'xr',
    price: 74.99,
  },
  {
    code: '11',
    price: 79.99,
  },
  {
    code: '11p',
    price: 99.99,
  },
  {
    code: '11pm',
    price: 109.99,
  },
];

console.log(value);

async function update() {
  console.log('Entered fucntion');
  console.log(value.length);
  value.forEach(async (v) => {
    console.log(v);
    const phone = await Phone.findOne({ code: v.code });
    phone.battery = v.price;
    await phone.save();
    console.log(phone.name, ' Updated successfully');
  });
}

setTimeout(test, 2000);

async function test() {
  console.log(await Booking.find());
}
