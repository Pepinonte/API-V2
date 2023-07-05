import { Request, Response } from "express";
import User from "../../models/user";
import * as userValidation from "../../validation/user/post.validation";
import bcrypt from "bcrypt";
import { jwt } from "jsonwebtoken";
import { token } from "morgan";

export async function createOne(req: Request, res: Response) {
  const { body } = req;
  console.log(body);
  const { error } = userValidation.createOne(body);
  if (error) return res.status(401).json(error.details[0].message);

  const hash = await bcrypt.hash(body.user_password, 10);

  const modifyBody = {
    user_name: body.user_name,
    user_token: body.user_token,
    user_password: hash,
  };
  console.log(modifyBody)

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
  const JWT_SECRET =
    "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu";
  const { body } = req;
  console.log(body);
  const { error } = userValidation.createOne(body);
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
      } else {
        const token = jwt.sign(body.user_name, JWT_SECRET, {
          expiresIn: "1h",
        });
        res.status(200).json({ msg: "user logged in", user });
        // res.cookie("token", token, { httpOnly: true, maxAge: 36000 });
        // console.log(token);
      }
    })
    .catch((err) => res.status(400).json(err));
}
