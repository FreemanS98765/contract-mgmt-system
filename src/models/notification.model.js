module.exports = (sequelize, Sequelize) => {
  const Notification = sequelize.define(
    "Notification",
    {
      message: {
        type: Sequelize.STRING,
      },
      title: {
        type: Sequelize.STRING,
      },
      itemTitle: {
        type: Sequelize.STRING,
      },
      url: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
    },
    {
      // options
    }
  );

  return Notification;
};
