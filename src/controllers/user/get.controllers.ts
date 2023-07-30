import { Request, Response } from "express";
import { Users } from "../../models/user";

export async function getAll(req: Request, res: Response) {
  Users.findAll({
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then(async (user) => {
      if (user.length === 0) {
        return res.status(400).json({ error: true, msg: "no users found" });
      }
      res.status(200).json({ msg: "all users", user });
    })
    .catch((err) => res.status(400).json(err));
}

export async function getById(req: Request, res: Response) {
  const { id } = req.params;
  Users.findByPk(id, {
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((user) => {
      if (!user) {
        return res.status(400).json({ error: true, msg: `user with id ${id} not found` });
      }
      res.status(200).json({ msg: `user with id ${id}`, user });
    })
    .catch((err) => res.status(400).json(err));
}

export async function getByName(req: Request, res: Response) {
  const { name } = req.params;
  Users.findAll({
    where: { user_name: name },
    attributes: { exclude: ["createdAt", "updatedAt"] },
  })
    .then((user) => {
      if (user.length === 0) {
        return res.status(400).json({ error: true, msg: `user with name ${name} not found` });
      }
      res.status(200).json({ msg: `user with name ${name}`, user });
    })
    .catch((err) => res.status(400).json(err));
}

export async function whoami(req: Request, res: Response) {
  res.status(200).json({ msg: "whoami", user: req.user });
}
