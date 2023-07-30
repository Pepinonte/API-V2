import passport from "passport";
import User from "../models/user";
import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";

passport.use(
  "local",
  new LocalStrategy(
    {
      usernameField: "user_name",
      passwordField: "user_password",
    },
    async (user_name, user_password, done) => {
      User.findOne({ where: { user_name: user_name } })
        .then(async (user: any) => {
          if (!user)
            return done(null, false, { message: "Incorrect username" });
          const validPassword = await bcrypt.compare(
            user_password,
            user.user_password,
          );
          if (!validPassword)
            return done(null, false, { message: "Incorrect password" });
          return done(false, user.dataValues);
        })
        .catch((err) => done(null, false, { message: err }));
    },
  ),
);

passport.serializeUser(function (user: any, done) {
  return done(null, {
    user_id: user.user_id,
  });
});

passport.deserializeUser(function (user: any, done) {
  User.findByPk(user.user_id)
    .then((user: any) => {
        done(null, user);
    })
    .catch((err) => done(err));
});

export default passport;
