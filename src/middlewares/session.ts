import { Request, Response, NextFunction } from "express";
import session from "express-session";
import { env } from "../env";

const sessionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  return session({
    secret: env("SESSION_SECRET"),
    resave: false,
    saveUninitialized: false,
  })(req, res, next);
};

export default sessionMiddleware;
