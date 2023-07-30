import { Request, Response, NextFunction } from "express";
import config from "../env";

const allowed_origins = [`http://${config.FRONT_HOST}:${config.FRONT_PORT}`]

const corsMiddleware = (req: Request, res: Response, next: NextFunction) => {
  res.append("Access-Control-Allow-Origin", allowed_origins);
  res.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
  res.append("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.append("Access-Control-Allow-Credentials", "true");
  next();
}

export default corsMiddleware;