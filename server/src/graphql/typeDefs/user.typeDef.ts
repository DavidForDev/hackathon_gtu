import gql from "graphql-tag";

export default gql`
  scalar JSON

  type User {
    user_id: ID
    userName: String
    email: String
    password: String
  }

  input UserRegistration {
    userName: String
    email: String
    password: String
  }

  input UserLogin {
    email: String
    password: String
  }

  type Response {
    data: JSON
    status: Boolean
    message: String
  }

  type Query {
    getUser(id: String): User
    signIn(userLogin: UserLogin): Response
  }

  type Mutation {
    createUser(userRegistration: UserRegistration): Response
  }
`;
