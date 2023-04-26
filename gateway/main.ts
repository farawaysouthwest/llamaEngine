import CreateApolloGateway from "./src/serverFactory";
import { config } from "dotenv";
import { createLogger, transports } from "winston";
import express, { ErrorRequestHandler } from "express";
import http from "http";

// config env.
config();

const logger = createLogger({
  transports: [new transports.Console()],
});

const server = CreateApolloGateway(logger);

const app = express();
const httpServer = http.createServer(app);

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  logger.error({ message: err.message });
  next(err);
};

server.start().then(() => {
  app.use(errorHandler);
  server.applyMiddleware({ app });
  httpServer.listen({ port: 4000 }, () => {
    logger.info(
      `🚀 Server ready at http://localhost:${4000}${server.graphqlPath}`
    );
  });
});
