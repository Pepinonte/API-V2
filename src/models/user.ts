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
    user_token: {
      type: DataTypes.STRING(100),
      allowNull: false,
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
    },
    user_creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    user_last_login: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    user_profile_picture: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    user_biography: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    user_email_verified: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    user_country: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    user_zip_code: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: true,
    },
    user_city: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    user_address: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    user_first_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    user_last_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default User;
