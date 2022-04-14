"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const datasources_1 = __importDefault(require("./datasources"));
function CreateApolloSubgraphServer(schema) {
    const server = new apollo_server_1.ApolloServer({
        schema,
        dataSources: datasources_1.default,
    });
    return server;
}
exports.default = CreateApolloSubgraphServer;
