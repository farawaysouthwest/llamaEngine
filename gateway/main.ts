import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import CreateApolloGateway from "./src/serverFactory";
import { config } from "dotenv";
import { createLogger, transports } from "winston";

// config env.
config();

const logger = createLogger({
  transports: [new transports.Console()],
});

const server: ApolloServer = CreateApolloGateway(logger);

// run server.
startStandaloneServer(server)
  .then(({ url }) => {
    logger.info(`🚀 Gateway ready at ${url}`);
  })
  .catch((err) => {
    logger.error(err);
  });
