import { Request, Response } from "express";
import Product from "../models/product";

export async function getAll(req: Request, res: Response) {
  Product.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((products) => {
      res.status(200).json({ msg: "all products", products });
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
