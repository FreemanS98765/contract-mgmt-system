const HOST = "giowm1045.siteground.biz";
const USERNAME = "uqfk1kp5urx5x";
const PASSWORD = "y211~9&6$23&";
const DATABASE = "dbt4yxagyszfid";
//const PORT = 3306;

// const USERNAME = "root";
// const PASSWORD = "root";
// const DATABASE = "contract_mgmt";
// const PORT = 8889;

const env = {
  host: HOST,
  user: USERNAME,
  password: PASSWORD,
  db: DATABASE,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

module.exports = env;
