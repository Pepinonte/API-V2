import { DataTypes } from "sequelize";
import db from "../database";

const User = db.define(
  "user",
  {
    user_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    user_name: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    user_password: {
      type: DataTypes.STRING(1000),
      allowNull: false,
    },
    user_email: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    user_creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    user_last_login: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    user_profile_picture: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    user_biography: {
      type: DataTypes.STRING(1000),
      allowNull: true,
      defaultValue: null,
    },
    user_email_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
      defaultValue: null,
    },
    user_country: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    user_zip_code: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
      defaultValue: null,
    },
    user_city: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    user_address: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    user_first_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
    user_last_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default User;
