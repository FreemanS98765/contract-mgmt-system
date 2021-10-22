module.exports = function (app) {
    const plugins = require("../controllers/plugin.controller.js");
  
    // Create a new Plugin
    app.post("/api/plugins/add", plugins.create);
  
    // Retrieve all plugins
    app.get("/api/plugins", plugins.findAll);
  
    // Retrieve all published plugins
    app.get("/api/plugins/published", plugins.findAllPublished);
  
    // Retrieve a single Plugin with id
    app.get("/api/plugins/:id", plugins.findById);
  
    // Update a Plugin with id
    app.put("/api/plugins/:id", plugins.update);
  
    // Delete a Plugin with id
    app.delete("/api/plugins/:id", plugins.delete);
  
    // Delete all plugins
    app.delete("/api/plugins", plugins.deleteAll);
  };
  