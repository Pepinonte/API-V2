import { Request, Response } from "express";
import User from "../../models/user";

export async function deleteById(req: Request, res: Response) {
  const { id } = req.params;

  User.destroy({
    where: { user_id: id },
  })
    .then((user) => {
      if (user === 0) {
        return res.status(400).json({ msg: `user with id ${id} not found` });
      }
      res.status(200).json({ msg: `user with id ${id} deleted`, user });
    })
    .catch((err) => res.status(400).json(err));
}

export async function deleteByName(req: Request, res: Response) {
  const { name } = req.params;

  User.destroy({
    where: { user_name: name },
  })
    .then((user) => {
      if (user === 0) {
        return res.status(400).json({ msg: `user with name ${name} not found` });
      }
      res.status(200).json({ msg: `user with name ${name} deleted`, user });
    })
    .catch((err) => res.status(400).json(err));
}