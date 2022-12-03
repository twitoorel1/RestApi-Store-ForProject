const express = require("express");
const cors = require("cors");
const app = express();

const globalErrorHandler = require("./controllers/globalErrorHandler");
const AppError = require("./utils/AppError");

app.use(express.static("public"));
app.use(express.json());
app.use(cors());
// app.use(function (req, res, next) {
//   req.header("Content-Type", "application/json");
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, OPTIONS, PUT, PATCH, DELETE"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "X-Requested-With,content-type"
//   );
//   res.setHeader("Access-Control-Allow-Credentials", true);
//   res.set(
//     "Cache-Control",
//     "no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0"
//   );
//   next();
// });

app.get("/", (req, res) => {
  res.send("Home Page RestApi");
});

const routes = require("./routes/index");
app.use(routes);

app.all("*", (req, res, next) => {
  next(new AppError("Page Not Found", 404));
});

app.use(globalErrorHandler);

module.exports = app;
