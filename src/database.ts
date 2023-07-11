import { Sequelize } from "sequelize";
import config from "./env"

export default new Sequelize(
  config.MYSQL_DATABASE,
  config.MYSQL_USER,
  config.MYSQL_PASSWORD,
  {
    host: config.MYSQL_HOST,
    port: config.MYSQL_PORT,
    dialect: "mysql",
    logging: config.NODE_ENV === "production" ? false : console.log,
  },
);
