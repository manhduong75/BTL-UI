const express = require("express");
const cors = require("cors");
const app = express();
const routesInit = require("./routes/indexRoute");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
routesInit(app);

var server = app.listen(3000, function listen() {
  var port = server.address().port;
  console.log("App listening at http://192.168.1.208" + ":" + port);
});
