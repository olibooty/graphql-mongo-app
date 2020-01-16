const typeDefs = require("./typeDefs");

module.exports = db => {
  const resolvers = {
    Book: {}
  };

  const queryResolvers = {
    Query: {
      getBooks: () => {
        return db.books.find({});
      },

      getBooksByAuthor: (root, { author }, context) => {
        return db.books.find({ author });
      },

      getBook: (root, { title }, context) => {
        return db.books.findOne({ title });
      }
    }
  };

  const mutationResolvers = {
    Mutation: {
      addBook: (root, { title, author }, context) =>
        db.books.insert({ title, author })
    }
  };

  return {
    typeDefs,
    resolvers: {
      ...resolvers,
      ...queryResolvers,
      ...mutationResolvers
    }
  };
};
