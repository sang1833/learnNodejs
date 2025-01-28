const express = require("express");
const morgan = require("morgan");
const app = express();

// init middleware
app.use(morgan("dev"));
// init db

// init routes
app.get("/", (req, res) => {
  return res.status(200).json({ message: "Hello World" });
});

// handling error

module.exports = app;
