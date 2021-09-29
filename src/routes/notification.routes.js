module.exports = function (app) {
    const notifications = require("../controllers/notification.controller.js");
  
    // Create a new Contract
    app.post("/api/notifications/add", notifications.create);
  
    // Retrieve all notifications
    app.get("/api/notifications", notifications.findAll);
  
    // Retrieve all published notifications
    app.get("/api/notifications/published", notifications.findAllPublished);
  
    // Retrieve a single Contract with id
    app.get("/api/notifications/:id", notifications.findById);
  
    // Update a Contract with id
    app.put("/api/notifications/:id", notifications.update);
  
    // Delete a Contract with id
    app.delete("/api/notifications/:id", notifications.delete);
  
    // Delete all notifications
    app.delete("/api/notifications", notifications.deleteAll);
  };
  