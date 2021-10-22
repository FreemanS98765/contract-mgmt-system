const { DATEONLY } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
  const Plugin = sequelize.define("Plugin", {
    name: {
      type: Sequelize.STRING,
    },
    amoung: {
      type: Sequelize.INTEGER,
    },
    orderDate: {
      type: Sequelize.DATEONLY,
    },
    renewalData: {
      type: Sequelize.DATEONLY,
    },
  });
};
