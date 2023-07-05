import { Request, Response } from "express";
import User from "../../models/user";
import userValidation from "../../validation/userValidation";
import bcrypt from "bcrypt";
import { iUser } from "../../interfaces/iUser";

export async function createOne(req: Request, res: Response) {
  const { body } = req;
  console.log(body);
  const { error } = userValidation(body);
  if (error) return res.status(401).json(error.details[0].message);

  const hash = await bcrypt.hash(body.user_password, 10);

  const modifyBody = {
    user_name: body.user_name,
    user_password: hash,
  };

  User.create({ ...modifyBody })
    .then((user) => {
      res.status(201).json({ msg: "user created", user });
      console.log(hash);
    })
    .catch((err) =>
      res.status(400).json({ msg: `error creating user ${err}` }),
    );
}

export async function login(req: Request, res: Response) {
  const { body } = req;
  console.log(body);
  const { error } = userValidation(body);
  if (error) return res.status(401).json(error.details[0].message);
  User.findAll({
    where: { user_name: body.user_name },
  })
    .then(async (user: any) => {
      if (user.length === 0) {
        return res.status(401).json({ msg: "user not found" });
      }
      const validPassword = await bcrypt.compare(
        body.user_password,
        user[0].user_password,
      );
      if (!validPassword) {
        return res.status(401).json({ msg: "invalid password" });
      }
      res.status(200).json({ msg: "user logged in", user });
    })
    .catch((err) => res.status(400).json(err));
}
