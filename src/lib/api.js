const db = require("../models");
const Contract = db.contracts;
const Op = db.Sequelize.Op;

// Create and Save a new Contract
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: "Content cannot be empty!",
    });
    return;
  }

  // Create a Contract
  const contract = {
    title: req.body.title,
    client: req.body.client,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    price: req.body.amount,
    status: req.body.status,
    company: req.body.company,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    notes: req.body.notes,
  };

  // Save Contract in the database
  Contract.create(contract)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while creating the Contract",
      });
    });
};

// Retrieve all Contracts from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  let condition = title ? { title: { [Op.like]: `%${title}%` } } : null;

  Contract.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occured while retrieving contracts.",
      });
    });
};

// Find a single Contract with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Contract.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Contract with id=" + id,
      });
    });
};

// Update a Contract by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Contract.update(req.body, {
    where: { id: id },
  }).then((num) => {
    if (num === 1) {
      res.send({
        message: "Contract was updated successfully.",
      });
    } else {
      res.send({
        message: `Cannot update Contract with id=${id}. Maybe Contract was not found or req.body is empty!`,
      });
    }
  });
};

// Delete a Contract with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Contract.destroy({
    where: { id: id },
  }).then((num) => {
    if (num === 1) {
      res.send({
        message: "Contract was deleted successfully!",
      });
    } else {
      res.send({
        message: `Cannot delete Contract with id=${id}. Maybe Contract was not found.`,
      });
    }
  });
};

// Delete all Contracts from the database.
exports.deleteAll = (req, res) => {
  Contract.destroy({
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
  Contract.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving contracts.",
      });
    });
};
