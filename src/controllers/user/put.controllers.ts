import { Request, Response } from "express";
import User from "../../models/user";
import bcrypt from "bcrypt";
import * as userValidation from "../../validation/user/put.validation";

export async function updateById(req: Request, res: Response) {
  const { body } = req;
  const { error } = userValidation.updateById(body);
  if (error) return res.status(401).json(error.details[0].message);
  if (body.user_password) {
    const hash = await bcrypt.hash(body.user_password, 10);
    body.user_password = hash;
  }

  User.update({...body}, { where: { user_id: body.user_id } })
    .then((user) => {
      res.status(200).json({ msg: `user with id ${body.user_id} updated`, user });
    })
    .catch((err) => res.status(400).json(err));
}

export async function updateByName(req: Request, res: Response) {
  const { body } = req;
  const { error } = userValidation.updateByName(body);
  if (error) return res.status(401).json(error.details[0].message);
  if (body.user_password) {
    const hash = await bcrypt.hash(body.user_password, 10);
    body.user_password = hash;
  }

  User.update({...body}, { where: { user_name: body.user_name } })
    .then((user) => {
      res.status(200).json({ msg: `user with name ${body.user_name} updated`, user });
    })
    .catch((err) => res.status(400).json(err));
}