import joi from "joi";
import * as newsValidation from "../../interfaces/news/post.interfaces";

export const createOne = (body: newsValidation.createOne) => {
  const newsSchema = joi.object({
    news_name: joi.string().min(3).max(100).trim().required(),
    news_description: joi.string().min(5).max(10000).trim().required(),
    news_picture: joi.string().min(3).max(1000).trim(),
    news_link: joi.string().min(3).max(100).trim().uri(),
  });
  return newsSchema.validate(body);
};
