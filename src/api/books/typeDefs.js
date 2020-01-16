const { gql } = require("apollo-server");

const schema = gql`
  type Book {
    _id: ID
    title: String
    author: String
  }
`;

const queries = gql`
  extend type Query {
    getBooks: [Book]

    getBooksByAuthor(author: String): [Book]

    getBook(title: String): Book
  }
`;

const mutations = gql`
  extend type Mutation {
    addBook(title: String, author: String): Book
  }
`;

module.exports = [schema, queries, mutations];
