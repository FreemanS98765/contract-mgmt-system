const express = require("express");
const cors = require("cors");
const db = require("./src/models");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Contract Management System." });
});

require("./src/routes/contract.routes")(app);

// set port, listen for requests
const PORT = process.env.PORT || 3306;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});


db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});
