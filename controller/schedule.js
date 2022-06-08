const ScheduledNotification = require("../models/scheduleNotification");

const schedule = require("./scheduleServices");

exports.createNotification = async (req, res) => {
  try {
    const notification = await schedule.createSchedule(req.body);
    res.status(201).json({ success: true, data: notification });
  } catch (error) {
    res.status(400).json({ message: error.message, success: false });
  }
};

exports.getNotification = async (req, res) => {
  try {
    const list = schedule.getJobs();
    const keys = Object.keys(list);

    let schedules = await ScheduledNotification.find({});

    schedules = schedules.filter((item) => keys.includes(item._id.toString()));

    res.json({
      data: { schedules },
      status: "success",
      message: "successfully",
    });
  } catch (e) {
    res.status(400).json({ message: e.message, success: false });
  }
};
