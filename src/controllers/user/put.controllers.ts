import { Request, Response } from "express";
import User from "../../models/user";
import bcrypt from "bcrypt";
import * as userValidation from "../../validation/user/put.validation";

export async function updateBySession(req: any, res: Response) {
  const { body } = req;
  const { error } = userValidation.updateBySession(body);
  if (error) return res.status(401).json({error: true, msg: error.details[0].message});
  if (body.user_password) {
    const hash = await bcrypt.hash(body.user_password, 10);
    body.user_password = hash;
  }
  User.update({...body}, { where: { user_id: req.user.user_id } })
    .then((user) => {
      if (user[0] === 0) {
        return res.status(400).json({error: true,  msg: `user with name ${req.user.user_name} not found or element(s) provided are identical` });
      }
      res.status(200).json({ msg: `user with name ${req.user.user_name} updated`, user });
    })
    .catch((err) => res.status(400).json(err));
}