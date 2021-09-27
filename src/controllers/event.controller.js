const db = require("../config/db.config.js");
const Events = db.events;
//const Op = db.Sequelize.Op;

// Create and Save a new Contract with Express API
exports.create = (req, res) => {
  // Create a Contract
  const event = {
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

  // Save Contract in the database
  Events.create(event)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
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

// Find a single Contract with an id
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

// Update a Contract by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Events.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "Contract was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Contract with id=${id}. Maybe Contract was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating Contract with id=" + id,
      });
    });
};

// Delete a Contract with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  console.log("Within delete controller function: ", req.params);
  Events.destroy({ where: { id: id } })
    .then(() => {
      res.status(200).send("Contract has been deleted!");
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
      res.send({ message: `${nums} Contracts were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all contracts.",
      });
    });
};

// Find all published Contracts
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

function validateEvent(event) {
  console.log(event);
}
