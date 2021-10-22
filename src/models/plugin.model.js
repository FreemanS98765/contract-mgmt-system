const { DATEONLY } = require("sequelize/types");

module.exports = (sequelize, Sequelize) => {
  const Plugin = sequelize.define(
    "Plugin",
    {
      title: {
        type: Sequelize.STRING,
      },
      price: {
        type: Sequelize.INTEGER,
      },
      orderDate: {
        type: Sequelize.DATEONLY,
      },
      renewalData: {
        type: Sequelize.DATEONLY,
      },
      status: {
        type: Sequelize.STRING,
      },
    },
    {
      // options
    }
  );
  return Plugin;
};
