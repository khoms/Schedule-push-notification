const express = require("express");
const app = express();
const connectDb = require("./config/db");

app.use(express.json());

connectDb();

app.listen(3000, () => {
  console.log("Server running on PORT 3000");
});
