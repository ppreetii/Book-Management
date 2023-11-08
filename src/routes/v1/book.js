const express = require("express");

const bookController = require("../../controllers/v1/book");
const { bookSchema,getBookSchema } = require("../../validation-schemas/book");
const { validateRequest } = require("../../middlewares/validation");
const API = require("../../constants/api");

const router = express.Router();

router.post(
  "/",
  validateRequest(bookSchema),
  bookController.createBook
);

router.get(
  "/",
  bookController.getAllBooks
);

router.get(
  `${API.ID}`,
  validateRequest(null, true, getBookSchema),
  bookController.getBook
);

router.put(
  `${API.ID}`,
  validateRequest(bookSchema, true, getBookSchema),
  bookController.updateBook
);

router.delete(
  `${API.ID}`,
  validateRequest(null, true, getBookSchema),
  bookController.deleteBook
);

module.exports = router;
