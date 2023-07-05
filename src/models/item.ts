import { DataTypes } from "sequelize";
import db from "../database";

const Item = db.define(
  "item",
  {
    item_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    item_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    item_description: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: null,
    },
    item_price: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    item_picture: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    item_author: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    item_file: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    item_type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    item_author: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    item_date_upload: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Item;
