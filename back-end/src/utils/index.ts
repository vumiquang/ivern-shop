import Joi from "joi";

export const getFieldSchema = (
  schema: Joi.Schema,
  listSchemaField: string[]
):Joi.Schema => {
  const newObject = {};
  for (let key of listSchemaField) {
    newObject[key] = schema.extract(key);
  }
  return Joi.object(newObject);
};
