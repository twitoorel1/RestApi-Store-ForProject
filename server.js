const dotenv = require("dotenv").config();
const mongoose = require("mongoose");
const app = require("./app");

const database_endpoint = process.env.DB_CONNECT;

mongoose
  .connect(database_endpoint)
  .then(() => console.log("💻 MongoDB Connected"))
  .catch(() => console.log("Error"));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`http://localhost:${port}`));
