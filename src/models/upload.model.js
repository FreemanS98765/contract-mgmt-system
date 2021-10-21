module.exports = (sequelize, Sequelize) => {
  const Upload = sequelize.define(
    "Uploads",
    {
      files: {
        type: Sequelize.BLOB,
      },
      filename: {
        type: Sequelize.STRING,
      },
      path: {
        type: Sequelize.STRING,
      },
    },
    {
      // options
    }
  );

  return Upload;
};
