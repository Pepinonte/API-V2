import joi from "joi";
import * as userValidation from "../../interfaces/user/post.validation";

 export const createOne = (body: userValidation.createOne) => {
  const UserSchema = joi.object({
    user_name: joi.string().min(3).max(40).trim().required(),
    user_token: joi.string().min(3).max(40).trim().required(),
    user_password: joi.string().min(3).max(40).trim().required(),
  });
  return UserSchema.validate(body);
};
