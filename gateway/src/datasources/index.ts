import { DataSources } from "apollo-server-core/dist/graphqlOptions";

// interface for all DAO objects.
export interface IdataSources {}

// datasource abstraction.
export default (): DataSources<IdataSources> => {
  return {};
};
