# graphql-mongo-app
Tiny POC app built with monk, apollo &amp; jest

### Installation
`yarn`

### Usage
ensure you have nodemon globally installed (or run `node ./src/`)

`yarn start` ...to start

`yarn test` ...to test

Why not start by adding a book?

```graphql
mutation {
  addBook(title: "Harry Potter and the Chamber of Secrets", author: "J.K. Rowling") {
    title
    author
  }
}
```
