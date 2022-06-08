const mongoose = require("mongoose");

const scheduleSchema = new mongoose.Schema({
  time: {
    type: String,
  },
  days: {
    type: [],
  },
  notification: {},
});

module.exports = mongoose.model("scheduleNotification", scheduleSchema);
