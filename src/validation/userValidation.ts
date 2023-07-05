import joi from "joi";
import { iItem } from "../interfaces/iItem";

const itemValidation = (body: iItem) => {
  const itemSchema = joi.object({
    user_name: joi.string().min(3).max(40).trim().required(),
    user_password: joi.number().required(),
  });
  return itemSchema.validate(body);
};

export default itemValidation;
