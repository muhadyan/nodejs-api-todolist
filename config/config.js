require("dotenv").config({ path: process.cwd() + "/config/.env" });

module.exports = {
  development: {
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    username: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DBNAME,
    dialect: "mysql",
  },
};
