import { Request, Response } from "express";
import Item from "../../models/item";

export async function getAll(req: Request, res: Response) {
  Item.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((item) => {
      if (item.length === 0) {
        return res.status(400).json({ error: true, msg: "item not found" });
      }
      res.status(200).json({ msg: "all items", item });
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  Item.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((item) => {
      if (!item) {
        return res
          .status(400)
          .json({ error: true, msg: `item with id ${id} not found` });
      }
      res.status(200).json({ msg: `item with id ${id}`, item });
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}

export async function getByName(req: Request, res: Response) {
  const { name } = req.params;
  Item.findAll({
    where: { item_name: name },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((item) => {
      if (item.length === 0) {
        return res
          .status(400)
          .json({ error: true, msg: `item with name ${name} not found` });
      }
      res.status(200).json({ msg: `item with name ${name}`, item });
    })
    .catch((err) => res.status(400).json({ error: true, msg: err }));
}
