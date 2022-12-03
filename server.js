const mongoose = require("mongoose");
const app = require("./app");

// const database_endpoint = "mongodb://localhost:27017/RestApi-Store";
const database_endpoint =
  "mongodb+srv://twitoorel1:Ot2521ot@cluster0.pu4qk.mongodb.net/RestApi-Store";

mongoose
  .connect(database_endpoint)
  .then(() => console.log("💻 MongoDB Connected"))
  .catch(() => console.log("Error"));

const port = 5000;
app.listen(port, () => console.log(`http://localhost:${port}`));
