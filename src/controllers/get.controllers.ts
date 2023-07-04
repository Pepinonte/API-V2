import { Request, Response } from "express";
import Product from "../models/product";
import Item from "../models/item";

export async function getAll(req: Request, res: Response) {
  Item.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((item) => {
      res.status(200).json({ msg: "all products", item });
    })
    .catch((err) => res.status(400).json(err));
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  Product.findByPk(id)
    .then((product) => {
      res.status(200).json({ msg: `product with id ${id}`, product });
    })
    .catch((err) => res.status(400).json(err));
}
