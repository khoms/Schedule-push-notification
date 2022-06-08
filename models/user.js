const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  userToken: {
    type: String,
  },
});

module.exports = mongoose.model("user", UserSchema);
