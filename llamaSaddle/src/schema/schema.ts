import { gql } from "apollo-server";

export default gql`
  type Llama @key(fields: "saddleId") {
    saddleId: ID!
    saddle: Saddle
  }

  type Saddle {
    id: ID!
    name: String!
    color: Color!
  }

  enum Color {
    black
    brown
  }
`;
