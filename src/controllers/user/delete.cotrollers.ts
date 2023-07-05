import { Request, Response } from "express";

import User from "../../models/item";

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;

  User.destroy({
    where: { item_id: id },
  })
    .then((user) => {
      res.status(200).json({ msg: `user with id ${id} deleted`, user });
    })
    .catch((err) => res.status(400).json(err));
}
