import { Request, Response } from "express";
import Item from "../../models/item";

export async function updateById(req: Request, res: Response) {
  const { id } = req.params;
  const { body } = req;
  Item.update(body, { where: { item_id: id } })
    .then((item) => {
      res.status(200).json({ msg: `item with id ${id} updated`, item });
    })
    .catch((err) => res.status(400).json(err));
}
