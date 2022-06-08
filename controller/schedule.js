const ScheduledNotification = require("../models/scheduleNotification");

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
