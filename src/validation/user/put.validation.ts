import joi from "joi";
import * as userValidation from "../../interfaces/user/put.interfaces";

export const updateBySession = (body: userValidation.updateBySession) => {
  const UserSchema = joi.object({
    user_name: joi.string().min(3).max(100).trim(),
    user_email: joi.string().min(3).max(100).trim().email(),
    user_password: joi.string().min(3).max(100).trim(),
    user_last_login: joi.date(),
    user_profile_picture: joi.number().integer(),
    user_biography: joi.string().min(3).max(500).trim(),
    user_email_verified: joi.boolean(),
    user_country: joi.string().min(3).max(100).trim(),
    user_zip_code: joi.number().integer(),
    user_city: joi.string().min(3).max(100).trim(),
    user_address: joi.string().min(3).max(100).trim(),
    user_first_name: joi.string().min(3).max(100).trim(),
    user_last_name: joi.string().min(3).max(100).trim(),
  });
  return UserSchema.validate(body);
};