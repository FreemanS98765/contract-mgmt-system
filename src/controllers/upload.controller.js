const db = require("../config/db.config.js");
const Uploads = db.uploads;

// Create and Save a new upload with Express API
exports.create = (req, res) => {
  console.log("Req is: ", req.file);

  const upload = {
    filename: req.file.filename,
    files: req.file,
    path: req.file.path,
  };

  Uploads.create(upload)
    .then((data) => {
      console.log("Data is: ", data);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send("Upload Error -> " + err);
    });
};

// Retrieve all uploads from the database.
exports.findAll = (req, res) => {
  Uploads.findAll()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occured while retrieving uploads.",
      });
    });
};

// Find a single upload with an id
exports.findById = (req, res) => {
  const id = req.params.id;

  Uploads.findByPk(id)
    .then((data) => {
      console.log("Id is: ", id);
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error -> " + err,
      });
    });
};

// Update a upload by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Uploads.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num === 1) {
        res.send({
          message: "upload was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update upload with id=${id}. Maybe upload was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Error updating upload with id=" + id,
      });
    });
};

// Delete a upload with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  console.log("Within delete controller function: ", req.params);
  Uploads.destroy({ where: { id: id } })
    .then(() => {
      res.status(200).send("upload has been deleted!");
    })
    .catch((err) => {
      res.status(500).send("Fail to delete!");
    });
};

// Delete all uploads from the database.
exports.deleteAll = (req, res) => {
  Uploads.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({ message: `${nums} uploads were deleted successfully!` });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all uploads.",
      });
    });
};

// Find all published uploads
exports.findAllPublished = (req, res) => {
  Uploads.findAll({ where: { published: true } })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving uploads.",
      });
    });
};
