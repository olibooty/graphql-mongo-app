const { gql } = require("apollo-server");

const allSchemas = require("../api");

const initialTypes = gql`
  type Query {
    _empty: String
  }
  type Mutation {
    _empty: String
  }
`;

const initialSchema = {
  typeDefs: [initialTypes],
  resolvers: {
    Query: {},
    Mutation: {}
  }
};

module.exports = db =>
  allSchemas(db).reduce((acc, curr) => {
    const { typeDefs, resolvers } = curr;
    const { Query, Mutation, ...types } = resolvers;

    return {
      typeDefs: [...acc.typeDefs, ...typeDefs],
      resolvers: {
        ...acc.resolvers,
        ...types,
        Query: {
          ...acc.resolvers.Query,
          ...Query
        },
        Mutation: {
          ...acc.resolvers.Mutation,
          ...Mutation
        }
      }
    };
  }, initialSchema);
