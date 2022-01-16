const db = require("../models/dbConfig");

module.exports = {
  list: () => {
    return new Promise((res, rej) => {
      db.getConnection((err, connection) => {
        if (err) rej(err);
        connection.query(
          "Select id, bookName from books",
          (err, result, fields) => {
            connection.release();
            if (err) rej(err);
            if (result) res(result);
          }
        );
      });
    });
  },

  del: (_id) => {
    return new Promise((res, rej) => {
      db.getConnection((err, connection) => {
        if (err) rej(err);
        connection.query(
          "DELETE FROM books WHERE id=?;",
          [_id],
          (err, result, fields) => {
            connection.release();
            if (err) rej(err);
            if (result) res(result);
          }
        );
      });
    });
  },

  create: (bookName, review) => {
    return new Promise((res, rej) => {
      db.getConnection((err, connection) => {
        if (err) rej(err);

        connection.query(
          "insert into books (bookName, review) values (?, ?);",
          [bookName, review],
          (err, result, fields) => {
            connection.release();
            if (err) rej(err);
            console.log("result is ", result);
            if (result) res(result);
          }
        );
      });
    });
  },

  view: (_id) => {
    return new Promise((res, rej) => {
      db.getConnection((err, connection) => {
        if (err) rej(err);
        connection.query(
          "Select * from books where id=?",
          [_id],
          (err, result, fields) => {
            connection.release();
            if (err) rej(err);
            if (result) res(result);
          }
        );
      });
    });
  },

  edit: (_id, bookName, review) => {
    return new Promise((res, rej) => {
      db.getConnection((err, connection) => {
        if (err) rej(err);
        connection.query(
          "UPDATE books SET bookName = ?, review= ? WHERE id = ?;",
          [bookName, review, _id],
          (err, result, fields) => {
            connection.release();
            if (err) rej(err);
            if (result) res(result);
          }
        );
      });
    });
  },
};
