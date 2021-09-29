const env = require("./env.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(env.db, env.user, env.password, {
  host: env.host,
  dialect: env.dialect,
  operatorsAliases: false,

  pool: {
    max: env.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  },
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.contracts = require("../models/contract.model.js")(sequelize, Sequelize);
db.events = require("../models/event.model.js")(sequelize, Sequelize);
db.notifications = require("../models/notification.model.js")(sequelize, Sequelize);

module.exports = db;
