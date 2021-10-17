const fs = require("fs");

const db = require("../config/db.config.js");
const Uploads = db.uploads;

// Create and Save a new upload with Express API
exports.create = (req, res) => {
  // const upload = {
  //   filename: req.body.filename,
  //   files: fs.readFileSync(
  //     `../../uploads/${req.body.filename}`,
  //     (err, data) => {
  //       if (err) {
  //         console.log(err.stack);
  //         return;
  //       }
  //       console.log(data.toString());
  //     }
  //   ),
  // };

  const upload = {
    filename: req.body.filename,
    files: req.body.files,
  };

  Uploads.create(upload);
  // .then((upload) => {
  //   fs.writeFileSync(
  //     `../../public/assets/tmp/${upload.filename}`,
  //     upload.files
  //   );
  //   const file = req.body;

  //   return res.send(file);
  // })
  // .catch((err) => {
  //   console.log(err);
  //   res.send(`Error while uploading images: ${err}`);
  // });
  Uploads.create(upload)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send("Error -> " + err);
    });

  // Uploads.create(upload)
  //   .then((upload) => {
  //     fs.writeFileSync(`../../public/assets/tmp/${upload.name}`, upload.data);
  //     const files = req.files;

  //     return res.send(files);
  //   })
  //   .then(() => {
  //     const img = fs.readFileSync(req.file.path);
  //     const enconde_image = img.toString("base64");

  //     const upload = {
  //       type: req.file.mimetype,
  //       name: req.file.originalname,
  //       data: fs.readFileSync("/uploads" + req.file.filename),
  //     };
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //     return res.send(`Error while uploading images: ${err}`);
  //   });
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
  Uploads.findByPk(req.params.slug)
    .then((data) => {
      console.log(req.params.slug);
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
