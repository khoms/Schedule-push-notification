const express = require("express");
const app = express();
const connectDb = require("./config/db");

const schedule = require("./controller/scheduleServices");

const user = require("./route/user");
const notificationRoute = require("./route/schedule");

app.use(express.json());

app.use("/api/user", user);
app.use("/api/notification", notificationRoute);

schedule.reSchedule();

connectDb();

app.listen(3000, "192.168.1.164", console.log("Server running on PORT 3000"));
