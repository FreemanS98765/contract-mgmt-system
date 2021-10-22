const db = require("../config/db.config.js");
const Plugins = db.plugins;

// Create and Save a new Plugin with Express API
exports.create = (req, res) => {
  // Create a Plugin
  const plugin = {
    title: req.body.title,
    orderDate: req.body.orderDate,
    renewalDate: req.body.renewalDate,
    price: req.body.price,
    status: req.body.status,
  };

  // Save Contract in the database
  Plugins.create(plugin)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};
