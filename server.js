const express = require("express");
const connectDB = require("./config/db");
const path = require("path");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 5000;

// connect MongoDB database
connectDB();

const app = express();
app.use(bodyParser.json());
app.use(express.static("./client/build"));

app.use("/auth", require("./routes/auth"));
app.use("/api", require("./routes/api"));
app.use("/api/booking", require("./routes/booking"));

console.log(path.join(__dirname, "client", "build", "index.html"));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

// app.get("/booking", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "booking.html"));
// });

app.get("/admin/login", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log("Listening to PORT : ", PORT);
});
