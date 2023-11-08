const bookServices = require("../../services/book");

exports.createBook = async (req, res, next) => {
  try {
    const data = req.body;
    const book = await bookServices.createBook(data);

    res.status(201).json(book);
  } catch (error) {
    next(error);
  }
};

exports.getAllBooks = async (req, res, next) => {
  try {
    const books = await bookServices.getAllBooks();
    res.json(books);
  } catch (error) {
    next(error);
  }
};

exports.getBook = async (req, res, next) => {
  try {
    const {bookId} = req.params;
    const book = await bookServices.getBook(bookId);
    res.json(book);
  } catch (error) {
    next(error);
  }
};

exports.updateBook = async (req, res, next) => {
  try {
    const {bookId} = req.params;
    const data = req.body;

    const book = await bookServices.updateBook(bookId, data);

    res.json(book);
  } catch (error) {
    next(error);
  }
};

exports.deleteBook = async (req, res, next) => {
  try {
    const {bookId} = req.params;
    await bookServices.deleteBook(bookId);

    res.status(204).json({});
  } catch (error) {
    next(error);
  }
};
