import joi from "joi";
import * as itemValidation from "../../interfaces/item/put.interfaces";

export const updateById = (body: itemValidation.updateById) => {
  const itemSchema = joi.object({
    item_name: joi.string().min(3).max(40).trim(),
    item_price: joi.number().positive(),
    item_description: joi.string().min(5).max(500).trim(),
    item_picture: joi.string().min(3).max(100).trim(),
    item_file: joi.string().min(5).max(500).trim(),
    item_type_id: joi.number().integer(),
    item_author: joi.number().integer(),
  });
  return itemSchema.validate(body);
};

export const updateByName = (body: itemValidation.updateByName) => {
  const itemSchema = joi.object({
    item_name: joi.string().min(3).max(40).trim(),
    item_price: joi.number().positive(),
    item_description: joi.string().min(5).max(500).trim(),
    item_picture: joi.string().min(3).max(100).trim(),
    item_file: joi.string().min(5).max(500).trim(),
    item_type_id: joi.number().integer(),
    item_author: joi.number().integer(),
  });
  return itemSchema.validate(body);
};