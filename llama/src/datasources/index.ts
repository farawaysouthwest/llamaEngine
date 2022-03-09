import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import LlamaDatasource from "./Llama";

// interface for all DAO objects.
export interface IdataSources {
  llamas: LlamaDatasource;
}

// datasource abstraction.
export default (): DataSources<IdataSources> => {
  return {
    llamas: new LlamaDatasource(),
  };
};
