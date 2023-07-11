import { Request, Response } from "express";
import Item from "../../models/item";

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;
  Item.destroy({
    where: { item_id: id },
  })
    .then((item) => {
      if (item === 0) {
        return res.status(400).json({ msg: `item with id <${id}> not found` });
      }
      res.status(200).json({ msg: `item with id <${id}> deleted`, item });
    })
    .catch((err) => res.status(400).json(err));
}

export async function deleteByName(req: Request, res: Response) {
  const { name } = req.params;
  Item.destroy({
    where: { item_name: name },
  })
    .then((item) => {
      if (item === 0) {
        return res.status(400).json({ msg: `item with name <${name}> not found` });
      }
      res.status(200).json({ msg: `item with name <${name}> deleted`, item });
    })
    .catch((err) => res.status(400).json(err));
}