const express = require("express");
const app = express();
const connectDb = require("./config/db");

const user = require("./route/user");

app.use(express.json());

app.use("/api/user", user);

connectDb();

app.listen(3000, "192.168.1.164", console.log("Server running on PORT 3000"));
