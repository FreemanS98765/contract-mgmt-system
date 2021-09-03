module.exports = (sequelize, Sequelize) => {
  const Contract = sequelize.define("contract", {
    title: {
      type: Sequelize.STRING,
    },
    client: {
      type: Sequelize.STRING,
    },
    startDate: {
      type: Sequelize.DATEONLY,
    },
    endDate: {
      type: Sequelize.DATEONLY,
    },
    price: {
      type: Sequelize.FLOAT,
    },
    status: {
      type: Sequelize.STRING,
    },
    company: {
      type: Sequelize.STRING,
    },
    phone: {
      type: Sequelize.INTEGER,
    },
    email: {
      type: Sequelize.STRING,
    },
    address: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    state: {
      type: Sequelize.STRING,
    },
    zipcode: {
      type: Sequelize.STRING,
    },
    notes: {
      type: Sequelize.STRING,
    },
  });

  return Contract;
};
