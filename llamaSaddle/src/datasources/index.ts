import { DataSources } from "apollo-server-core/dist/graphqlOptions";
import SaddleDatasource from "./Saddle";

// interface for all DAO objects.
export interface IdataSources {
  saddles: SaddleDatasource;
}

// datasource abstraction.
export default (): DataSources<IdataSources> => {
  return {
    saddles: new SaddleDatasource(),
  };
};
