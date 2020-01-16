const { createTestClient } = require("apollo-server-testing");
const { gql, MockList, ApolloServer } = require("apollo-server");

const api = require("../../util/reduceSchema");

const { typeDefs, resolvers } = api({});

const mocks = {
  Query: () => ({
    getBooks: () => new MockList(1)
  }),

  Book: () => ({
    title: () => "someTitle",
    author: () => "bob",
    _id: () => "1"
  })
};

const getBooks = gql`
  query {
    getBooks {
      title
      author
      _id
    }
  }
`;

describe("books api", () => {
  test("getBooks returns an array of books", async () => {
    const server = new ApolloServer({
      typeDefs,
      resolvers,
      mocks
    });

    const { query } = createTestClient(server);

    const { data } = await query({
      query: getBooks
    });

    expect(data).toEqual({
      getBooks: [
        {
          title: "someTitle",
          author: "bob",
          _id: "1"
        }
      ]
    });
  });
});
