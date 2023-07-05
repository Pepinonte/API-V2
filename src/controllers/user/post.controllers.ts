import { Request, Response } from "express";
import User from "../../models/user";
import userValidation from "../../validation/userValidation";

export async function createOne(req: Request, res: Response) {
  const { body } = req;
  console.log(body);
  const { error } = userValidation(body);
  if (error) return res.status(401).json(error.details[0].message);

  User.create({ ...body })
    .then((user) => {
      res.status(201).json({ msg: "user created", user });
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

  //   User.findAll({
  //     where: { user_name: body.user_name },
  //     user_password: bcrypt.hash(body.user_password, 10) },
  //   })
  //     .then((product) => {
  //       res.status(200).json({ msg: `product with id ${id} deleted`, product });
  //     })
  //     .catch((err) => res.status(400).json(err));
  // }

  // const test = bcrypt.compare(body.user_password, bcrypt.hash(body.user_password, 10));
  const hash = bcrypt.hash(body.user_password, 10);
  bcrypt.compare("body.user_password", await hash, function (err, result) {
    console.log(result);
  });
}
