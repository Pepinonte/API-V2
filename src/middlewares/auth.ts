const auth = async (req: any, res: any, next: any) => {
  try {
    if (!req.user) {
      throw new Error();
    }
    next();
  } catch (e) {
    res.status(401).send({ error: true, msg: "You need to be authenticated to access this route" });
  }
};

export default auth;
