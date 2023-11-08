const Book = require("../models/book");
const NotFoundError = require("../errors/not-found-error");
const BadRequestError = require("../errors/bad-requesr-error");

exports.createBook = async (data) => {
  try {
    const book = new Book({
      title: data?.title,
      author: data?.author,
      summary: data?.summary,
    });

    await book.save();

    return sanitize(book);
  } catch (error) {
    throw error;
  }
};

exports.getAllBooks = async () => {
  try {
    const books = await Book.find();
    return books ?? [];
  } catch (error) {
    throw error;
  }
};

exports.getBook = async (bookId) => {
  try {
    const book = await Book.findById(bookId);
    if (!book) {
      throw new NotFoundError("Book Not Found");
    }

    return sanitize(book);
  } catch (error) {
    throw error;
  }
};

exports.updateBook = async (id, data) => {
  try {
    const book = await Book.findById(id);
    if (!book) {
      throw new NotFoundError("Book Not Found");
    }
    book.title = data?.title;
    book.author = data?.author;
    book.summary = data?.summary;

    await book.save();

    return sanitize(book);
  } catch (error) {
    throw error;
  }
};

exports.deleteBook = async (id) =>{
  try {
    await this.getBook(id);
    await Book.deleteOne({
      _id: id
    });
  } catch (error) {
    throw error;
  }
}

function sanitize(book) {
  return {
    id: book?._id,
    title: book?.title ?? "",
    author: book?.author ?? "",
    summary: book?.summary ?? "",
  };
}
