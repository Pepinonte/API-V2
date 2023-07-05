import { Request, Response } from "express";
import User from "../../models/user";
import bcrypt from "bcrypt";

export async function updateById(req: Request, res: Response) {
  const { id } = req.params;
  const { body } = req;
  if (body.user_password) {
    const hash = await bcrypt.hash(body.user_password, 10);
    body.user_password = hash;
  }

  User.update({...body}, { where: { user_id: id } })
    .then((user) => {
      res.status(200).json({ msg: `user with id ${id} updated`, user });
    })
    .catch((err) => res.status(400).json(err));
}
