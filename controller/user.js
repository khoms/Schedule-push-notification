const User = require("../models/user");

exports.createUser = async (req, res, next) => {
  try {
    const client = await User.create(req.body);
    res.status(201).json({ success: true, data: client });
  } catch (err) {
    next(err);
    res.status().json(err.message);
  }
};
