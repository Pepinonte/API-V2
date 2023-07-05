import { Request, Response } from "express";

import Item from "../../models/item";

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;

  Item.destroy({
    where: { item_id: id },
  })
    .then((item) => {
      res.status(200).json({ msg: `item with id ${id} deleted`, item });
    })
    .catch((err) => res.status(400).json(err));
}
