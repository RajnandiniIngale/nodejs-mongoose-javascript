const { buildSchema } = require("graphql");

module.exports = buildSchema(`

    type User {
        id: ID!
        name: String!
        email: String!
    }

    input UserCreateInput {
        name: String!
        email: String!
    }

    input UserUpdateInput {
        id: ID!
        name: String
        email: String
    }

    type Query {
        user(id: ID!): User
        users: [User!]
    }

    type Mutation {
        createUser( user: UserCreateInput ): User
        updateUser( user: UserUpdateInput ): User
        deleteUser(id: ID!): User
    }

    schema {
        query: Query,
        mutation: Mutation
    }
`)