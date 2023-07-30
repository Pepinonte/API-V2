import session from "express-session";
import config from "../env";

const sessionMiddleware = session({
  secret: config.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  proxy: config.NODE_ENV === "production" ? true : false,
  cookie: {
    secure: config.NODE_ENV === "production" ? true : false,
    maxAge: 60000,
    sameSite: config.NODE_ENV === "production" ? "none" : false,
    domain: config.NODE_ENV === "production" ? config.FRONT_HOST : undefined,
  },
});

export default sessionMiddleware;
