require("dotenv").config();
const mongoose = require("mongoose");

const dbUrl = process.env.MONGO_URL;

function connectToDB() {
  mongoose
    .connect(dbUrl)
    .then(() => {
      console.log("db connected");
    })
    .catch((err) => {
      console.log("MongoDB connection Error: ", err);
    });
}

module.exports = connectToDB;
