import { buildSubgraphSchema } from "@apollo/subgraph";
import { ApolloServer } from "apollo-server";
import { GraphQLSchema } from "graphql";
import resolvers from "./src/resolvers";
import typeDefs from "./src/schema/schema";
import CreateApolloSubgraphServer from "./src/serverFactory";
import { config } from "dotenv";

// config env.
config();

const schema: GraphQLSchema = buildSubgraphSchema({ typeDefs, resolvers });

const server: ApolloServer = CreateApolloSubgraphServer(schema);

// run server.
server
  .listen({ port: process.env.PORT || 4001 })
  .then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
