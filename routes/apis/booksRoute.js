const booksController = require("../../controllers/booksControllers");

module.exports = (app) => {
  // get
  app.get("/", function (req, res) {
    booksController
      .list()
      .then((result) => {
        res.render("index.ejs", { data: result });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // get del
  app.get("/del/:id", function (req, res) {
    booksController
      .del(req.params.id)
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  // post add
  app.post("/create", function (req, res) {
    console.log(
      "get Create=",
      req.body["bookName"],
      " and ",
      req.body["review"]
    );
    booksController
      .create(req.body["bookName"], req.body["review"])
      .then((result) => {
        res.redirect("/");
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/create", function (req, res) {
    res.render("create.ejs");
  });

  app.get("/view/:id", function (req, res) {
    booksController
      .view(req.params.id)
      .then((result) => {
        res.render("view.ejs", { dat: result[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/edit/:id", function (req, res) {
    booksController
      .view(req.params.id)
      .then((result) => {
        res.render("edit.ejs", { dat: result[0] });
      })
      .catch((err) => {
        console.log(err);
      });
  });
  app.post("/edit/:id", function (req, res) {
    booksController
      .edit(req.params.id, req.body["bookName"], req.body["review"])
      .then((result) => {
        res.redirect("/view/" + req.params.id);
      })
      .catch((err) => {
        console.log(err);
      });
  });

  app.get("/tester", function (req, res) {
    res.send("Hello World!");
  });

  // app.get("/connect", function (req, res) {
  //   var mysql = require("mysql");

  //   var con = mysql.createConnection({
  //     host: "mysql_server",
  //     user: "test",
  //     password: "test",
  //     database: "books",
  //   });

  //   con.connect(function (err) {
  //     if (err) throw err;
  //     console.log("Connected!");
  //   });
  // });
};
