const Phone = require("./models/Phones");
const connectDB = require("./config/db");
const Booking = require("./models/Booking");
const mongoose = require("mongoose");
connectDB();

const value = [
  {
    code: "6",
    name: "iPhone 6",
    screen: 49.99,
    charging: 49.99,
    color: [
      {
        _id: mongoose.Types.ObjectId("5f9fabce9374d92294149a4e"),
        name: "Space Gray",
        code: "#25282A",
      },
      {
        _id: mongoose.Types.ObjectId("5f9fabce9374d92294149a4f"),
        name: "Silver",
        code: "#E4E4E2",
      },
      {
        _id: mongoose.Types.ObjectId("5f9fabce9374d92294149a50"),
        name: "Black",
        code: "#1F2020",
      },
    ],
    battery: 49.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885c537ec9474f6417e642"),
    code: "6s",
    name: "iPhone 6s",
    screen: 59.99,
    charging: 49.99,
    color: [
      { name: "Space Gray", code: "#25282A" },
      { name: "Silver", code: "#E4E4E2" },
      { name: "Black", code: "#1F2020" },
      { name: "Rose Gold", code: "#E6C7C2" },
    ],
    battery: 49.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885c537ec9474f6417e643"),
    code: "6p",
    name: "iPhone 6 Plus",
    screen: 69.99,
    charging: 59.99,
    color: [
      { name: "Space Gray", code: "#25282A" },
      { name: "Silver", code: "#E4E4E2" },
      { name: "Black", code: "#1F2020" },
    ],
  },
  {
    _id: mongoose.Types.ObjectId("5f885c537ec9474f6417e644"),
    code: "6sp",
    name: "iPhone 6s Plus",
    screen: 69.99,
    charging: 59.99,
    color: [
      { name: "Space Gray", code: "#25282A" },
      { name: "Silver", code: "#E4E4E2" },
      { name: "Black", code: "#1F2020" },
      { name: "Rose Gold", code: "#E6C7C2" },
    ],
    battery: 59.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885c537ec9474f6417e645"),
    code: "7",
    name: "iPhone 7",
    screen: 69.99,
    charging: 69.99,
    color: [
      { name: "Black", code: "#1F2020" },
      { name: "Silver", code: "#E4E4E2" },
      { name: "Gold", code: "#DFCCB7" },
      { name: "Rose Gold", code: "#E6C7C2" },
    ],
    battery: 59.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885c537ec9474f6417e646"),
    code: "7p",
    name: "iPhone 7 Plus",
    screen: 79.99,
    charging: 69.99,
    color: [
      { name: "Black", code: "#1F2020" },
      { name: "Silver", code: "#E4E4E2" },
      { name: "Gold", code: "#DFCCB7" },
      { name: "Rose Gold", code: "#E6C7C2" },
    ],
    battery: 59.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885c537ec9474f6417e647"),
    code: "8",
    name: "iPhone 8",
    screen: 69.99,
    charging: 79.99,
    color: [
      { name: "Silver", code: "#E4E4E2" },
      { name: "Space Gray", code: "#25282A" },
      { name: "Gold", code: "#F5DDC5" },
    ],
  },
  {
    _id: mongoose.Types.ObjectId("5f885c537ec9474f6417e648"),
    code: "8p",
    name: "iPhone 8 Plus",
    screen: 79.99,
    charging: 79.99,
    color: [
      { name: "Silver", code: "#E4E4E2" },
      { name: "Space Gray", code: "#25282A" },
      { name: "Gold", code: "#F5DDC5" },
    ],
    battery: 59.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885e307ec9474f6417e650"),
    code: "x",
    name: "iPhone X",
    screen: 109.99,
    charging: 99.99,
    color: [
      { name: "Silver", code: "#E4E4E2" },
      { name: "Space Gray", code: "#25282A" },
    ],
    battery: 69.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885e577ec9474f6417e651"),
    code: "xs",
    name: "iPhone XS",
    screen: 109.99,
    charging: 99.99,
    color: [
      { name: "Silver", code: "#E4E4E2" },
      { name: "Black", code: "#1F2020" },
      { name: "Gold", code: "#F5DDC5" },
    ],
    battery: 79.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885e577ec9474f6417e652"),
    code: "xsm",
    name: "iPhone XS Max",
    screen: 149.99,
    charging: 109.99,
    color: [
      { name: "Silver", code: "#E4E4E2" },
      { name: "Black", code: "#1F2020" },
      { name: "Gold", code: "#F5DDC5" },
    ],
    battery: 89.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885e577ec9474f6417e653"),
    code: "xr",
    name: "iPhone XR",
    screen: 119.99,
    charging: 99.99,
    color: [
      { name: "Coral", code: "#EE7762" },
      { name: "Red", code: "#A5282C" },
      { name: "Yellow", code: "#F3D060" },
      { name: "Black", code: "#1F2020" },
      { code: "#5EB0E5", name: "Blue" },
      { code: "#F9F6EF", name: "White" },
    ],
    battery: 74.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885e577ec9474f6417e654"),
    code: "11",
    name: "iPhone 11",
    screen: 129.99,
    charging: 109.99,
    color: [
      { name: "Light Purple", code: "#D1CDDA" },
      { name: "Light Yellow", code: "#FFE681" },
      { name: "Light Green", code: "#AEE1CD" },
      { name: "Black", code: "#1F2020" },
      { code: "#F9F6EF", name: "White" },
      { code: "#BA0C2E", name: "Red" },
    ],
    battery: 79.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885e577ec9474f6417e655"),
    code: "11p",
    name: "iPhone 11 Pro",
    screen: 229.99,
    color: [
      { name: "Space Gray", code: "#25282A" },
      { name: "Silver", code: "#E4E4E2" },
      { name: "Rose Gold", code: "#E6C7C2" },
      { name: "Midnight Green", code: "#4E5851" },
    ],
    battery: 99.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f885e577ec9474f6417e656"),
    code: "11pm",
    name: "iPhone 11 Pro Max",
    screen: 249.99,
    color: [
      { name: "Space Gray", code: "#25282A" },
      { name: "Silver", code: "#E4E4E2" },
      { name: "Rose Gold", code: "#E6C7C2" },
      { name: "Midnight Green", code: "#4E5851" },
    ],
    battery: 109.99,
  },
  {
    _id: mongoose.Types.ObjectId("5f9fb6ccbcbc7f1a3825e070"),
    code: "12",
    name: "iPhone 12",
    color: [
      {
        _id: mongoose.Types.ObjectId("5f9fb6ccbcbc7f1a3825e071"),
        name: "Space Gray",
        code: "#123122",
      },
    ],
    screen: null,
    charging: 102.99,
    __v: 0,
    battery: 102.99,
  },
];

console.log(value);

async function update() {
  console.log("Entered fucntion");
  console.log(value.length);
  value.forEach(async (v) => {
    console.log(v);
    const phone = await Phone.findOne({ code: v.code });
    phone.battery = v.price;
    await phone.save();
    console.log(phone.name, " Updated successfully");
  });
}

setTimeout(addData, 2000);

async function test() {
  console.log(await Booking.find());
}

async function addData() {
  value.forEach(async (val) => {
    console.log("Starting to save the phone");
    delete val._id;
    console.log("Deleted unnessary data");
    const phone = new Phone(val);
    await phone.save();
    console.log("Phone saved");
  });
}
