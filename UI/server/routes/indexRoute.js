const express = require("express");
const userRoute = require("./userRoute");
const commentRoute = require("./commentRoute");

function routesInit(app) {
  app.use("/", userRoute);
  app.use("/", commentRoute);
}

module.exports = routesInit;
