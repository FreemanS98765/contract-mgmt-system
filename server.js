const express = require("express");
const path = require("path");
const app = express();

const cors = require("cors");

const db = require("./src/config/db.config.js");

const PORT = process.env.PORT || 3306;

var corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
  credentials: true,
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// force: true will drop the table if it already exists
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync with { force: true }");
});

require("./src/routes/contract.routes.js")(app);
require("./src/routes/event.routes.js")(app);
require("./src/routes/notification.routes.js")(app);
require("./src/routes/upload.routes.js")(app);
require("./src/routes/plugin.routes.js")(app);

var server = app.listen(3306, function (err) {
  var host = server.address().address;
  var port = server.address().port;

  if (err) console.log("Error in server setup");

  console.log("App listening at http://%s:%s", host, port);
});
