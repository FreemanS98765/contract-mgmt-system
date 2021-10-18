module.exports = (sequelize, Sequelize) => {
  const Upload = sequelize.define(
    "Uploads",
    {
      files: {
        type: Sequelize.ARRAY,
      },
      filename: {
        type: Sequelize.STRING,
      },
    },
    {
      // options
    }
  );

  return Upload;
};
