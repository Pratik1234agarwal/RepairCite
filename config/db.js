const mongoose = require("mongoose");
const config = require("config");

const { mongoURIAtlas } = process.env;

const db = mongoURIAtlas ? mongoURIAtlas : config.get("mongoURIAtlas");
mongoose.set("useNewUrlParser", true);
mongoose.set("useUnifiedTopology", true);
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.connect(db);

const connectDB = async () => {
  try {
    await mongoose.connect(db);
    console.log("MongoDB connected");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

module.exports = connectDB;
