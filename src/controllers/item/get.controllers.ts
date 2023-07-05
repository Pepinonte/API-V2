import { Request, Response } from "express";
import Item from "../../models/item";

export async function getAll(req: Request, res: Response) {
  Item.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((item) => {
      res.status(200).json({ msg: "all items", item });
    })
    .catch((err) => res.status(400).json(err));
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  Item.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((item) => {
      res.status(200).json({ msg: `item with id ${id}`, item });
    })
    .catch((err) => res.status(400).json(err));
}
