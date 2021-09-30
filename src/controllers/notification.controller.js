const db = require("../config/db.config.js");
const Notifications = db.notifications;
//const Op = db.Sequelize.Op;

// Create and Save a new Notification with Express API
exports.create = (req, res) => {
  // Create a Notification
  const Notification = {
    title: req.body.title,
    status: req.body.status,
    message: req.body.message,
    url: req.body.url,
  };

  // Save Notification in the database
  Notifications.create(Notification)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
      console.log(err.response.status);
      console.log(err.response.data);
    });
};

// Retrieve all Notifications from the database.
exports.findAll = (req, res) => {
  Notifications.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving Notifications.",
      });
    });
};

// Find a single Notification with an id
exports.findById = (req, res) => {
  Notifications.findByPk(req.params.id)
    .then((data) => {
      console.log(req.params.id);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error -> " + err,
      });
    });
};

// Update a Notification by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Notifications.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Notification was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Notification with id=${id}. Maybe Notification was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Notification with id=" + id,
      });
    });
};

// Delete a Notification with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  console.log("Within delete controller function: ", req.params);
  Notifications.destroy({ where: { id: id } })
    .then(() => {
      res.status(200).send("Notification has been deleted!");
    })
    .catch((err) => {
      res.status(500).send("Fail to delete!");
    });
};

// Delete all Notifications from the database.
exports.deleteAll = (req, res) => {
  Notifications.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Notifications were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all Notifications.",
      });
    });
};

// Find all published Notifications
exports.findAllPublished = (req, res) => {
  Notifications.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving Notifications.",
      });
    });
};
