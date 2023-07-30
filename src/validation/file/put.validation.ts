import joi from "joi";
import * as fileValidation from "../../interfaces/file/put.interfaces";

export const updateById = (body: fileValidation.updateById) => {
  const fileSchema = joi.object({
    file_type_id: joi.number().integer(),
    file_name: joi.string().max(1000),
    file_format: joi.string().max(100),
    file_path: joi.string().max(10000),
  });
  return fileSchema.validate(body);
};

export const updateByName = (body: fileValidation.updateByName) => {
  const fileSchema = joi.object({
    file_type_id: joi.number().integer(),
    file_name: joi.string().max(1000),
    file_format: joi.string().max(100),
    file_path: joi.string().max(10000),
  });
  return fileSchema.validate(body);
};