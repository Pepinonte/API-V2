import { Sequelize } from "sequelize";
import {env} from "./env";

export default new Sequelize(env("MYSQL_DATABASE"), env("MYSQL_USER"), env("MYSQL_PASSWORD"), {
  host: env("MYSQL_HOST"),
  port: Number(env("MYSQL_PORT")),
  dialect: "mysql"
});
