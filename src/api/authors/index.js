const typeDefs = require("./typeDefs");

module.exports = db =>
  (() => {
    const queryResolvers = {
      Query: {
        getAuthors: () => {
          return db.authors.find({});
        }
      }
    };

    // const mutationResolvers = {
    //     Mutation: {
    //         addAuthor(root, args, context) {

    //         }
    //     }
    // }

    return {
      typeDefs,
      resolvers: {
        ...queryResolvers
      }
    };
  })();
