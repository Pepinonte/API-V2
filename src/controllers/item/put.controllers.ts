import { Request, Response } from "express";
import Product from "../../models/product";

export async function updateById(req: Request, res: Response) {
  const { id } = req.params;
  const { body } = req;
  Product.update({ ...body }, { where: { id } })
    .then((product) => {
      res.status(200).json({ msg: `product with id ${id} updated`, product });
    })
    .catch((err) => res.status(400).json(err));
}
