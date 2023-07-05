import joi from "joi";
import { iUser } from "../../interfaces/user/get.validation";

 export const createOne = (body: iUser) => {
  const UserSchema = joi.object({
    user_name: joi.string().min(3).max(40).trim().required(),
    user_password: joi.string().min(3).max(40).trim().required(),
  });
  return UserSchema.validate(body);
};
