import { ApolloServer } from "apollo-server";
import { GraphQLSchema } from "graphql";
import dataSources, { IdataSources } from "./datasources";

export interface Icontext {
  dataSources: IdataSources;
  authScope: string;
}

export default function CreateApolloSubgraphServer(
  schema: GraphQLSchema
): ApolloServer {
  const server: ApolloServer = new ApolloServer({
    schema,
    dataSources,
  });

  return server;
}
