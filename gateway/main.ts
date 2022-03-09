import { ApolloServer } from "apollo-server";
import CreateApolloGateway from "./src/serverFactory";
import { config } from "dotenv";

// config env.
config();

const server: ApolloServer = CreateApolloGateway();

// run server.
server
  .listen({ port: process.env.PORT || 4001 })
  .then(({ url }) => {
    console.log(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    console.error(err);
  });
