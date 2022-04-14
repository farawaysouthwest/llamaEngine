import { DataSource } from "apollo-datasource";
import { Llama } from "../../typeGen/llamaTypes";

export default class LlamaDatasource extends DataSource {
  constructor() {
    super();
  }

  public fetchLlamas(): Llama[] {
    const llamas: Llama[] = [
      {
        id: "1",
        furColor: "brown",
        name: "Cusco",
        bugTest: false,
      },
    ];

    return llamas;
  }
}
