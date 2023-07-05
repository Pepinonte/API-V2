import { Request, Response } from "express";
import User from "../../models/user";

export async function getAll(req: Request, res: Response) {
  User.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then(async (user) => {
      res.status(200).json({ msg: "all products", user });
    })
    .catch((err) => res.status(400).json(err));
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  User.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((user) => {
      res.status(200).json({ msg: `user with id ${id}`, user });
    })
    .catch((err) => res.status(400).json(err));
}
