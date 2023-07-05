import joi from "joi";
import * as userValidation from "../../interfaces/user/post.interfaces";

 export const createOne = (body: userValidation.createOne) => {
  const UserSchema = joi.object({
    user_name: joi.string().min(3).max(100).trim().required(),
    user_email: joi.string().min(3).max(100).trim().email().required(),
    user_password: joi.string().min(3).max(100).trim().required(),
  });
  return UserSchema.validate(body);
};

export const login = (body: userValidation.login) => {
  const UserSchema = joi.object({
    user_name: joi.string().min(3).max(100).trim().required(),
    user_password: joi.string().min(3).max(100).trim().required(),
  });
  return UserSchema.validate(body);
};