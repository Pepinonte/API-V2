import * as jwt from "jsonwebtoken";
import User from "../models/user";
import {env} from "../env";

const auth = async (req: any, res: any, next: any) => {
  try {
    const authToken = req.header("Authorization").replace("Bearer ", "");
    const decodedToken: any = jwt.verify(authToken, env("JWT_SECRET"));
    console.log(decodedToken);
    const user = await User.findOne({
      where: { user_name: decodedToken.user_name, user_token: authToken },
    });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    next();
  } catch (e) {
    // res.redirect(301, `http://${env("front_host")}:${env("front_port")}/login`);
    res.status(401).send({ error: "Please authenticate." });
  }
};

export default auth;
