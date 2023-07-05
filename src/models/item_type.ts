import { DataTypes } from "sequelize";
import db from "../database";

const ItemType = db.define(
  "item_type",
  {
    item_type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    item_type_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    item_type_description: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default ItemType;
