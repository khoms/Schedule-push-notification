const express = require("express");
const router = express.Router();

const { getNotification } = require("../controller/schedule");

router.route("/notification", getNotification);

module.exports = router;
