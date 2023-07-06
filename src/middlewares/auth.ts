import * as jwt from "jsonwebtoken";
import User from "../models/user";

const auth = async (req: any, res: any, next: any) => {
  try {
    const authToken = req.header("Authorization").replace("Bearer ", "");
    const decodedToken: any = jwt.verify(
      authToken,
      "goK!pusp6ThEdURUtRenOwUhAsWUCLheBazl!uJLPlS8EbreWLdrupIwabRAsiBu",
    );
    // console.log()
    // console.log(decodedToken)
    const user = await User.findOne({
      where: { user_name: "moi", user_token: authToken },
    });
    if (!user) {
      throw new Error();
    }
    // req.token = token;
    req.user = user;
    next();
  } catch (e) {
    res.status(401).send({ error: "Please authenticate." });
  }
};

export default auth;
