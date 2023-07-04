import joi from "joi";
import { iItem } from "../interfaces/iItem";

const itemValidation = (body: iItem) => {
  const itemSchema = joi.object({
    item_name: joi.string().min(3).max(40).trim().required(),
    item_price: joi.number().required(),
    item_description: joi.string().min(5).max(500).trim(),
    item_picture: joi.string().min(3).max(100).trim(),
    item_file: joi.string().min(5).max(500).trim().required(),
    item_type_id: joi.number().required(),
    item_author: joi.number().required(),
  });
  return itemSchema.validate(body);
};

export default itemValidation;
