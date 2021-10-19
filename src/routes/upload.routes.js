module.exports = function (app) {
  const db = require("../config/db.config.js");
  const Uploads = db.uploads;

  const upload = require("../config/upload.config.js");
  const uploads = require("../controllers/upload.controller.js");

  // Create a new upload
  //app.post("/api/uploads/add", upload.single('files'), uploads.create);
  app.post("/api/uploads/add", upload.single("files"), (req, res) => {
    const uploadObj = {
      files: req.file,
      filename: req.file.filename,
    };

    Uploads.create(uploadObj)
      .then((data) => {
        console.log("Data is: ", data);
        res.send(data);
      })
      .catch((err) => {
        res.status(500).send("Error -> " + err);
      });
  });

  // Retrieve all uploads
  app.get("/api/uploads", uploads.findAll);

  // Retrieve all published uploads
  app.get("/api/uploads/published", uploads.findAllPublished);

  // Retrieve a single upload with id
  app.get("/api/uploads/:id", uploads.findById);

  // Update a upload with id
  app.put("/api/uploads/:id", uploads.update);

  // Delete a upload with id
  app.delete("/api/uploads/:id", uploads.delete);

  // Delete all uploads
  app.delete("/api/uploads", uploads.deleteAll);
};
