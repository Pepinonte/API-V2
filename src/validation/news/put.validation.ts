import joi from "joi";
import * as newsValidation from "../../interfaces/news/put.interfaces";

export const updateById = (body: newsValidation.updateById) => {
  const newsSchema = joi.object({
    news_name: joi.string().min(3).max(100).trim(),
    news_description: joi.string().min(5).max(10000).trim(),
    news_picture: joi.number().integer(),
    news_link: joi.string().min(3).max(100).trim().uri(),
  });
  return newsSchema.validate(body);
};

export const updateByName = (body: newsValidation.updateByName) => {
  const newsSchema = joi.object({
    newsname: joi.string().min(3).max(100).trim(),
    news_description: joi.string().min(5).max(10000).trim(),
    news_picture: joi.number().integer(),
    news_link: joi.string().min(3).max(100).trim().uri(),
  });
  return newsSchema.validate(body);
};