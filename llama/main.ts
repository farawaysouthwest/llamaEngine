import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "apollo-server";
import { GraphQLSchema } from "graphql";
import resolvers from "./src/resolvers";
import typeDefs from "./src/schema/schema";
import CreateApolloSubgraphServer from "./src/serverFactory";

const schema: GraphQLSchema = buildSubgraphSchema({ typeDefs, resolvers });

const server: ApolloServer = CreateApolloSubgraphServer(schema);

// run server.
server
  .listen()
  .then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
