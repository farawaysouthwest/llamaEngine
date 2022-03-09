import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server";
/**
 *
 * Factory for creating an Apollo gateway server.
 *
 * @returns ApolloServer with federation gateway config.
 */
export default function CreateApolloGateway(): ApolloServer {
  const gateway = new ApolloGateway();

  const server = new ApolloServer({ gateway });

  return server;
}
