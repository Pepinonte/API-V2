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
      allowNull: true,
    },
    item_description: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    item_price: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },
    item_picture: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    item_author: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    item_file: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    item_type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    item_date_upload: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export const ItemType = db.define(
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
    }
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default Item;
