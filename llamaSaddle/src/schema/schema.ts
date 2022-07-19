import { gql } from "apollo-server";

export default gql`
  type Llama @key(fields: "saddleId") {
    id: ID!
    saddleId: ID!
    saddle: Saddle @requires(fields: "furColor")
    furColor: String! @external
  }

  type Saddle {
    id: ID!
    name: String!
    color: Color!
    matchFurColor: Boolean!
  }

  enum Color {
    black
    brown
  }
`;
