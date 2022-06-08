const mongoose = require("mongoose");

const connectDB = async () => {
  const conn = await mongoose.connect(
    "mongodb://localhost:27017/scheduleNotification",
    {
      // const conn = await mongoose.connect(
      //   "db link",
      // {
      useNewUrlParser: true,
      // useCreateIndex: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    }
  );

  console.log("Mongo Db connected:" + conn.connection.host);
};

module.exports = connectDB;
