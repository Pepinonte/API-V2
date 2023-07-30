import { Request, Response } from "express";
import User from "../../models/user";

export async function logout(req: Request, res: Response) {
  req.session.destroy((err) => {
    if (err) {
      return res.status(400).json({ msg: `error logging out ${err}` });
    }
  });
  return res.status(200).json({ msg: "user logged out" });
}

export async function deleteBySession(req: any, res: Response) {
  User.destroy({
    where: { user_id: req.user.user_id },
  })
    .then((user) => {
      if (user === 0) {
        return res.status(400).json({ msg: `user with name ${req.user.user_name} not found` });
      }
      req.session.destroy((err) => {
        if (err) {
          return res.status(400).json({ msg: `error logging out ${err}` });
        }
      });
      res.status(200).json({ msg: `user with name ${req.user.user_name} deleted`, user });
    })
    .catch((err) => res.status(400).json(err));
}