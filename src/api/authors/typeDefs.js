const { gql } = require("apollo-server");

const schema = gql`
  type Author {
    _id: ID
    name: String
    books: [Book]
  }
`;

const queries = gql`
  extend type Query {
    getAuthors: [Author]
  }
`;

const mutations = gql`
  extend type Mutation {
    addAuthor(name: String): Author
  }
`;

module.exports = [schema, queries, mutations];
