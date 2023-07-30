import { DataTypes } from "sequelize";
import db from "../database";

// export const ItemType = db.define

export const File = db.define(
  "file",
  {
    file_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    file_name: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    file_type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    file_format: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    file_path: {
      type: DataTypes.STRING(10000),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export const FileType = db.define(
  "file_type",
  {
    file_type_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    file_type_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    file_type_description: {
      type: DataTypes.STRING(10000),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default File;
