const db = require("../config/db.config.js");
const Contracts = db.contracts;

// Create and Save a new Contract
exports.create = (req, res) => {

  // Create a Contract
  const contract = {
    title: req.body.title,
    client: req.body.client,
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    price: req.body.price,
    status: req.body.status,
    company: req.body.company,
    phone: req.body.phone,
    email: req.body.email,
    address: req.body.address,
    city: req.body.city,
    state: req.body.state,
    zipcode: req.body.zipcode,
    upload: req.body.upload,
    notes: req.body.notes,
  };

  // Save Contract in the database
  Contracts.create(contract)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });
};

// Retrieve all Contracts from the database.
exports.findAll = (req, res) => {
  Contracts.findAll()
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
exports.findById = (req, res) => {
  const id = req.params.id;

  Contracts.findByPk(id)
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

  Contracts.update(req.body, {
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

  Contracts.destroy({
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
  Contracts.destroy({
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
  Contracts.findAll({ where: { published: true } })
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

function validateContract(contract) {
  console.log(contract);
}