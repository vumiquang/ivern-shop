import Joi from "joi";
import { getFieldSchema } from "@/utils";

const schema = {
  user: Joi.object({
    id: Joi.string().allow(null),
    username: Joi.string().alphanum().required().min(4).max(30).messages({
      "string.alphanum": "Username should only contain alphanumeric characters",
      "string.min": "Username must be at least 4 characters long",
      "string.max": "Username must be at most 30 characters long",
      "any.required": "Username is required",
    }),
    password: Joi.string()
      .required()
      .pattern(
        new RegExp(
          "^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$"
        )
      )
      .messages({
        "string.empty": "Password is required",
        "any.required": "Password is required",
        "string.pattern.base":
          "Password must be at least 8 characters long,At least one uppercase English letter, At least one lowercase English letter,At least one digit,At least one special character(#?!@$%^&*-)",
      }),
    confirm_password: Joi.string()
      .valid(Joi.ref("password"))
      .messages({ "any.only": "Confirm password do not match" }),
    name: Joi.string().alphanum().required().min(4).max(30).messages({
      "string.alphanum": "Name should only contain alphanumeric characters",
      "string.min": "Name must be at least 4 characters long",
      "string.max": "Name must be at most 30 characters long",
      "any.required": "Name is required",
    }),
    address: Joi.string().required().min(4).max(60).messages({
      "string.min": "Address must be at least 4 characters long",
      "string.max": "Address must be at most 60 characters long",
      "any.required": "Address is required",
    }),
    phone: Joi.string()
      .required()
      .pattern(new RegExp("(84|0[3|5|7|8|9])+([0-9]{8})\\b"))
      .messages({
        "any.required": "Phone is required",
        "string.pattern.base": "Phone must be Viet Nam phone number",
      }),
  }),
};

export const registerSchema = getFieldSchema(schema.user, [
  "username",
  "name",
  "password",
  "confirm_password",
  "address",
  "phone",
]);
export default schema;
