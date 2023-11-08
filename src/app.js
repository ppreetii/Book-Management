const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const bodyParser = require("body-parser");

const bookRoutes = require("./routes/v1/book");
const API = require("./constants/api");
const errorHandler = require("./middlewares/error-handler");
const PageNotFound = require("./errors/page-not-found-error");

const app = express();

app.use(cors());
app.use(helmet());
app.use(bodyParser.json());

app.use(`${API.BASE_URL}${API.BOOK}`, bookRoutes);
app.get("/", (req,res,next)=>{
  res.json({
    message: "Welcome. We are on Home Page"
  });
});

app.all("*", () => {
  throw new PageNotFound();
});

app.use(errorHandler);

module.exports = app;
