import joi from "joi";
import { iUser } from "../interfaces/iUser";

const userValidation = (body: iUser) => {
  const UserSchema = joi.object({
    user_name: joi.string().min(3).max(40).trim().required(),
    user_password: joi.string().min(3).max(40).trim().required(),
  });
  return UserSchema.validate(body);
};

export default userValidation;
