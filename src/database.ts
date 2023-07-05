import { Sequelize } from "sequelize";
import {loadEnvFromFile} from "./env";
import allowedVariables from "./allowedEnv";

const myenv = loadEnvFromFile("/.env", allowedVariables);

export default new Sequelize(myenv["MYSQL_DATABASE"], myenv["MYSQL_USER"], myenv["MYSQL_PASSWORD"], {
  host: myenv["MYSQL_HOST"],
  port: Number(myenv["MYSQL_PORT"]),
  dialect: "mysql"
});
