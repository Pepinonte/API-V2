import joi from "joi";
import * as userValidation from "../../interfaces/user/put.interfaces";

 export const updateById = (body: userValidation.updateById) => {
  const UserSchema = joi.object({
    user_id: joi.number().integer().required(),
    user_name: joi.string().min(3).max(100).trim(),
    user_email: joi.string().min(3).max(100).trim().email(),
    user_password: joi.string().min(3).max(100).trim().required(),
    user_last_login: joi.date(),
    user_profile_picture: joi.string().min(3).max(100).trim(),
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

export const updateByName = (body: userValidation.updateByName) => {
  const UserSchema = joi.object({
    user_name: joi.string().min(3).max(100).trim().required(),
    user_email: joi.string().min(3).max(100).trim().email(),
    user_password: joi.string().min(3).max(100).trim().required(),
    user_last_login: joi.date(),
    user_profile_picture: joi.string().min(3).max(100).trim(),
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