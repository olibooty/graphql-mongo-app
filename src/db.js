const monk = require("monk");

module.exports = (() => {
  const db = monk("localhost/graphapp");

  db.then(() => {
    console.log("🙏  Connected to mongo");
  });

  const books = db.get("books");
  const authors = db.get("authors");

  return {
    books,
    authors
  };
})();
