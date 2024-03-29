import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer, BaseContext, ApolloServerPlugin } from "@apollo/server";
import { readFileSync } from "fs";
import { Logger } from "winston";

const supergraphSdl = readFileSync("./schema.graphql").toString();

/**
 *
 * Factory for creating an Apollo gateway server.
 *
 * @returns ApolloServer with federation gateway config.
 */
export default function CreateApolloGateway(
  logger: Logger
): ApolloServer<BaseContext> {
  // error plugin.
  const errorPlugin: ApolloServerPlugin<BaseContext> = {
    async requestDidStart() {
      return {
        async didEncounterErrors({ errors }) {
          if (errors) {
            for (const error of errors) {
              // log GraphQLErrors. Noteworthy properties to log include:
              // error.name, error.message, error.extensions
              logger.error({
                message: error.message,
                name: error.name,
                extensions: error.extensions,
                service: "graphql-gateway",
              });
            }
          }
        },
      };
    },
  };

  const gateway = new ApolloGateway({ supergraphSdl });

  const server = new ApolloServer({ gateway, plugins: [errorPlugin] });

  return server;
}
