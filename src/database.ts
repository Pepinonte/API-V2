import { Sequelize } from "sequelize";

export default new Sequelize("orm-crud", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
