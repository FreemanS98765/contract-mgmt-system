const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection established!");
  })
  .catch((err) => {
    console.error("Unable to establish a connection:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.contracts = require("./contract.model.js")(sequelize, Sequelize);

module.exports = db;
