const { createTestClient } = require("apollo-server-testing");
const { gql, MockList, ApolloServer } = require("apollo-server");

const api = require("../../util/reduceSchema");

const { typeDefs, resolvers } = api({});

const mocks = {
  Query: () => ({
    getAuthors: () => new MockList(1)
  }),
  Author: () => ({
    _id: () => "1",
    name: () => "bob",
    books: () => new MockList(1)
  }),
  Book: () => ({ title: "someTitle", author: "bob" })
};

const getAuthors = gql`
  query {
    getAuthors {
      _id
      name
      books {
        title
        author
      }
    }
  }
`;

describe("authors api", () => {
  test("getAuthors returns an array of authors", async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      mocks
    });

    const { query } = createTestClient(server);

    const { data } = await query({
      query: getAuthors
    });

    expect(data).toEqual({
      getAuthors: [
        {
          _id: "1",
          name: "bob",
          books: [{ title: "someTitle", author: "bob" }]
        }
      ]
    });
  });
});
