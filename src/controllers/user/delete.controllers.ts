import { Request, Response } from "express";
import User from "../../models/user";

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;

  User.destroy({
    where: { user_id: id },
  })
    .then((user) => {
      res.status(200).json({ msg: `user with id ${id} deleted`, user });
    })
    .catch((err) => res.status(400).json(err));
}