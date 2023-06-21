import { Request, Response } from "express";
import Product from "../models/product";
import productValidation from "../validation/productValidation";

export async function createOne(req: Request, res: Response) {
  const { body } = req;
  console.log(body);
  const { error } = productValidation(body);
  if (error) return res.status(401).json(error.details[0].message);

  Product.create({ ...body })
    .then((product) => {
      res.status(201).json({ msg: "product created", product });
    })
    .catch((err) => res.status(400).json(err));
}
