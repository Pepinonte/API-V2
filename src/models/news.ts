import { DataTypes } from "sequelize";
import db from "../database";

const News = db.define(
  "news",
  {
    news_id: {
      type: DataTypes.INTEGER.UNSIGNED,
      autoIncrement: true,
      primaryKey: true,
    },
    news_name: {
      type: DataTypes.STRING(100),
      allowNull: true,
    },
    news_description: {
      type: DataTypes.STRING(10000),
      allowNull: true,
    },
    news_picture: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    news_creation_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    news_link: {
      type: DataTypes.STRING(1000),
      allowNull: true,
    },
    news_update_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  },
);

export default News;
