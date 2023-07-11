import { Request, Response } from "express";
import User from "../../models/user";
import bcrypt from "bcrypt";
import * as userValidation from "../../validation/user/put.validation";

export async function updateById(req: Request, res: Response) {
  const { params } = req;
  const { body } = req;
  const { error } = userValidation.updateById(body);
  if (error) return res.status(401).json(error.details[0].message);
  if (body.user_password) {
    const hash = await bcrypt.hash(body.user_password, 10);
    body.user_password = hash;
  }

  User.update({...body}, { where: { user_id: params.id } })
    .then((user) => {
      if (user[0] === 0) {
        return res.status(400).json({ msg: `user with id ${params.id} not found or element(s) provided are identical` });
      }
      res.status(200).json({ msg: `user with id ${params.id} updated`, user });
    })
    .catch((err) => res.status(400).json(err));
}

export async function updateByName(req: Request, res: Response) {
  const { params } = req;
  const { body } = req;
  const { error } = userValidation.updateByName(body);
  if (error) return res.status(401).json(error.details[0].message);
  if (body.user_password) {
    const hash = await bcrypt.hash(body.user_password, 10);
    body.user_password = hash;
  }

  User.update({...body}, { where: { user_name: params.name } })
    .then((user) => {
      if (user[0] === 0) {
        return res.status(400).json({ msg: `user with name ${params.name} not found or element(s) provided are identical` });
      }
      res.status(200).json({ msg: `user with name ${params.name} updated`, user });
    })
    .catch((err) => res.status(400).json(err));
}