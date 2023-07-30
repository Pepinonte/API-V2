import { Request, Response } from "express";
import User from "../../models/user";
import * as userValidation from "../../validation/user/post.validation";
import bcrypt from "bcrypt";
import passport from "passport";

export async function signup(req: Request, res: Response) {
  if (req.isAuthenticated()) {
    return res.status(200).json({ msg: "user already logged in", user: req.user });
  }
  const { body } = req;
  const { error } = userValidation.signup(body);
  if (error) return res.status(401).json(error.details[0].message);
  const user = await User.findOne({
    where: { user_name: body.user_name },
  })
  if (user) return res.status(401).json({ error: true, msg: `user <${body.user_name}> already exist` });

  const hash = await bcrypt.hash(body.user_password, 10);

  const modifyBody = {
    user_name: body.user_name,
    user_email: body.user_email,
    user_password: hash,
  };
  User.create({ ...modifyBody })
    .then((user) => {
      passport.authenticate('local', (err, user, info) => {
        if (err) { return res.status(401).json({error: true, msg: info.message}); }
        if (!user) { return res.status(401).json({error: true, msg: info.message}); }
        req.logIn(user, (err) => {
          if (err) { return res.status(401).json(err); }
          return res.status(200).json({ msg: "user created", user: req.user });
        });
      })(req, res);
    })
    .catch((err) =>
      res.status(400).json({ msg: `error creating user ${err}` }),
    );
}

export async function login(req: Request, res: Response) {
  if (req.isAuthenticated()) {
    return res.status(200).json({ msg: "user already logged in", user: req.user });
  }
  const { body } = req;
  const { error } = userValidation.login(body);
  if (error) return res.status(401).json(error.details[0].message);
  passport.authenticate('local', (err, user, info) => {
    if (err) { return res.status(401).json({error: true, msg: info.message}); }
    if (!user) { return res.status(401).json({error: true, msg: info.message}); }
    req.logIn(user, (err) => {
      if (err) { return res.status(401).json(err); }
      return res.status(200).json({ msg: "user logged in", user: req.user });
    });
  })(req, res);
}