import { ApolloServer } from "apollo-server";
import { GraphQLSchema } from "graphql";
import datasources, { IdataSources } from "./datasources";

export interface Icontext {
  dataSources: IdataSources;
  authScope: string;
}

export default function CreateApolloSubgraphServer(
  schema: GraphQLSchema
): ApolloServer {
  const server: ApolloServer = new ApolloServer({
    schema,
    dataSources: datasources,
  });

  return server;
}
