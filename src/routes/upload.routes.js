module.exports = function (app) {
  const uploads = require("../controllers/upload.controller.js");

  // Create a new upload
  //app.post("/api/uploads/add", upload.single('file'), uploads.create);
  app.post("/api/uploads/add", uploads.create);

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
