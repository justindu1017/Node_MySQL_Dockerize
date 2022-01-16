const fs = require("fs");
const path = require("path");

module.exports = (app) => {
  // API routes
  fs.readdirSync(__dirname + "/apis/").forEach((file) => {
    if (file.indexOf(".") > 0)
      require(`./apis/${file.substr(0, file.indexOf("."))}`)(app);
  });
};
