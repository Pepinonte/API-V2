import { Request, Response } from "express";

import Item from "../../models/item";

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;

  Item.destroy({
    where: { item_id: id },
  })
    .then((product) => {
      res.status(200).json({ msg: `product with id ${id} deleted`, product });
    })
    .catch((err) => res.status(400).json(err));
}
