const db = require("../config/db.config.js");
const Events = db.events;
//const Op = db.Sequelize.Op;

// Create and Save a new Event with Express API
exports.create = (req, res) => {
  // Create a Event
  const event = {
    slug: req.body.slug,
    event: req.body.event,
    client: req.body.client,
    company: req.body.company,
    isSingleDay: req.body.isSingleDay,
    eventItems: req.body.eventItems,
    startDate: req.body.startDate,
    startTime: req.body.startTime,
    endDate: req.body.endDate,
    endTime: req.body.endTime,
    lastYearsPrice: req.body.lastYearsPrice,
    status: req.body.status,
    upload: req.body.upload,
    notes: req.body.notes,
  };

  // Save Event in the database
  Events.create(event)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err.response.data);
      console.log(err.response.status);
      console.log(err.response.data);
    });
};

// Retrieve all Events from the database.
exports.findAll = (req, res) => {
  Events.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving events.",
      });
    });
};

// Find a single Event with an id
exports.findById = (req, res) => {
  Events.findByPk(req.params.id)
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

// Update an Event by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Events.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Event was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Event with id=${id}. Maybe Event was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Event with id=" + id,
      });
    });
};

// Delete a Event with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  console.log("Within delete controller function: ", req.params);
  Events.destroy({ where: { id: id } })
    .then(() => {
      res.status(200).send("Event has been deleted!");
    })
    .catch((err) => {
      res.status(500).send("Fail to delete!");
    });
};

// Delete all Events from the database.
exports.deleteAll = (req, res) => {
  Events.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} Events were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Events.",
      });
    });
};

// Find all published Events
exports.findAllPublished = (req, res) => {
  Events.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving events.",
      });
    });
};
