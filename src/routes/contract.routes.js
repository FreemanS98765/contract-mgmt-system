module.exports = function(app) {  
  const contracts = require("../controllers/contract.controller.js");

  // Create a new Contract
  app.post("/api/contracts/add", contracts.create);

  // Retrieve all Contracts
  app.get("/api/contracts", contracts.findAll);

  // Retrieve all published Contracts
  app.get("/api/contracts/published", contracts.findAllPublished);

  // Retrieve a single Contract with id
  app.get("/api/contracts/:contractId", contracts.findById);

  // Update a Contract with id
  app.put("/api/contracts/:contractId", contracts.update);

  // Delete a Contract with id
  app.delete("/api/contracts/:contractId", contracts.delete);

  // Delete all Contracts
  app.delete("/api/contracts/", contracts.deleteAll);
};
