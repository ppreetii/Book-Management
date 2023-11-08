const CustomError = require("../errors/custom-error");

module.exports = (err, req, res, next) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      errors: err.serializeErrors(),
    });
  }
  res.status(400).send({
    errors: [
      {
        message: err.message,
      },
    ],
  });
};
