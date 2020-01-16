const authors = require("./authors");
const books = require("./books");

module.exports = db => [authors(db), books(db)];
