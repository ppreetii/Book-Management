const app = require("./app");
const mongoose = require("mongoose");
const config = require("./configs/config");

mongoose.connect(config.mongoUrl).then(() => {
  console.log("Database Connected!");
  app.listen(config.port, () => {
    console.log(`Server is listening at: ${config.port}`);
  });
});
