import joi from "joi";
import * as fileValidation from "../../interfaces/file/post.interfaces";

export const createOne = (body: fileValidation.createOne) => {
  const fileSchema = joi.object({
    file_type_id: joi.number().integer().required(),
    file_name: joi.string().max(1000).required(),
    file_format: joi.string().max(100).required(),
    file_path: joi.string().max(10000).required(),
  });
  return fileSchema.validate(body);
};
