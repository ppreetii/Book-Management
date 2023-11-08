const joi = require("joi");
const { isValidObjectId } = require("mongoose");

const bookSchema = joi.object({
  title: joi.string().required(),
  author: joi.string().required(),
  summary: joi.string().required(),
});

const getBookSchema = joi.string().custom((value, helpers) => {
  if (!isValidObjectId(value))
    return helpers.message("Invalid book ID");

  return value;
});

module.exports = {
  bookSchema,
  getBookSchema,
};
