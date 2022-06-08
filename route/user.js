const express = require("express");

const { createUser } = require("../controller/user");
const router = new express.Router();

router.route("/").post(createUser);

module.exports = router;
