module.exports = (sequelize, Sequelize) => {
  const Contract = sequelize.define("contract", {
    client: {
      type: Sequelize.STRING,
    },
    company: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    phone: {
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
    title: {
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
    notes: {
      type: Sequelize.STRING,
    },
    upload: {
      type: Sequelize.STRING,
    },
    status: {
      type: Sequelize.STRING,
    },
  }, {
    // options
  });

  return Contract;
};
