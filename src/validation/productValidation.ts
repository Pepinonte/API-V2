import joi from "joi";
import { iProduct } from "../interfaces/iProduct";

const productValidation = (body: iProduct) => {
  const productSchema = joi.object({
    title: joi.string().min(3).max(40).trim().required(),
    price: joi.number().required(),
    description: joi.string().min(5).max(500).trim(),
  });
  return productSchema.validate(body);
};

export default productValidation;
