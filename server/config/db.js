const mongoose = require("mongoose");

const connectdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URL);
    console.log(`data base connected to ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectdb;
