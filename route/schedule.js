const express = require("express");
const router = express.Router();

const {
  getNotification,
  createNotification,
} = require("../controller/schedule");

router.route("/").get(getNotification).post(createNotification);

module.exports = router;
