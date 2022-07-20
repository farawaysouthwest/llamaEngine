import { gql } from "apollo-server";

export default gql`
  type Query {
    llamas: [Llama!]!
  }

  type Llama @key(fields: "id") @key(fields: "saddleId") {
    id: ID!
    name: String!
    furColor: String!
    saddleId: ID!
  }
`;
