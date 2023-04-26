import { ApolloGateway } from "@apollo/gateway";
import { ApolloServer } from "apollo-server-express";
import { PluginDefinition } from "apollo-server-core";
import { readFileSync } from "fs";
import { Logger } from "winston";

const supergraphSdl = readFileSync("./schema.graphql").toString();

/**
 *
 * Factory for creating an Apollo gateway server.
 *
 * @returns ApolloServer with federation gateway config.
 */
export default function CreateApolloGateway(logger: Logger): ApolloServer {
  // error plugin.
  const errorPlugin: PluginDefinition = {
    async requestDidStart() {
      return {
        async didEncounterErrors({ errors }) {
          if (errors) {
            for (const error of errors) {
              // log GraphQLErrors. Noteworthy properties to log include:
              // error.name, error.message, error.extensions
              //logger.error(error.message);
              throw new Error(error.message);
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
