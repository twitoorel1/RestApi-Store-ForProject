const express = require("express");
const cors = require("cors");
const app = express();

const globalErrorHandler = require("./controllers/globalErrorHandler");
const AppError = require("./utils/AppError");

app.use(express.static("public"));
app.use(cors());
app.use(express.json());

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
