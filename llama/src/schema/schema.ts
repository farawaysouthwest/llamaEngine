import { gql } from "apollo-server";

export default gql`
  type Query {
    llamas: [Llama!]!
  }

  type Llama {
    id: ID!
    name: String!
    furColor: String!
  }
`;
