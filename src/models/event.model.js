module.exports = (sequelize, Sequelize) => {
  const Event = sequelize.define("Event", {
    slug: {
      type: Sequelize.STRING,
    },
    client: {
      type: Sequelize.STRING,
    },
    company: {
      type: Sequelize.STRING,
    },
    event: {
      type: Sequelize.STRING,
    },
    startDate: {
      type: Sequelize.DATEONLY,
    },
    startTime: {
      type: Sequelize.STRING,
    },
    endDate: {
      type: Sequelize.DATEONLY,
    },
    endTime: {
      type: Sequelize.STRING,
    },
    lastYearsPrice: {
      type: Sequelize.FLOAT,
    },
    eventItems: {
      type: Sequelize.STRING,
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

  return Event;
};
