const { ApolloServer } = require("apollo-server");

const db = require("./db");
const { typeDefs, resolvers } = require("./util/reduceSchema")(db);

const server = new ApolloServer({ typeDefs, resolvers });

server.listen(1234).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

const bookz = [
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowling"
  },
  {
    title: "Jurassic Park",
    author: "Michael Crichton"
  }
];
