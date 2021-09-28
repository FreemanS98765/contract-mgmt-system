module.exports = function (app) {
  const events = require("../controllers/event.controller.js");

  // Create a new Contract
  app.post("/api/events/add", events.create);

  // Retrieve all events
  app.get("/api/events", events.findAll);

  // Retrieve all published events
  app.get("/api/events/published", events.findAllPublished);

  // Retrieve a single Contract with id
  app.get("/api/events/:id", events.findById);

  // Update a Contract with id
  app.put("/api/events/:id", events.update);

  // Delete a Contract with id
  app.delete("/api/events/:id", events.delete);

  // Delete all events
  app.delete("/api/events", events.deleteAll);
};
