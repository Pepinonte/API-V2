import { Request, Response } from "express";
import Product from "../models/product";

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;
  Product.destroy({ where: { id } })
    .then((product) => {
      res.status(200).json({ msg: `product with id ${id} deleted`, product });
    })
    .catch((err) => res.status(400).json(err));
}
