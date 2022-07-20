import { DataSource } from "apollo-datasource";
import { Llama } from "../../typeGen/llamaTypes";

export interface dbLlama extends Llama {
  saddleId: string;
}

export default class LlamaDatasource extends DataSource {
  llamas: dbLlama[] = [
    {
      id: "1",
      furColor: "brown",
      name: "Cusco",
      saddleId: "100",
    },
    {
      id: "34",
      furColor: "white",
      name: "Javier",
      saddleId: "200",
    },
  ];

  constructor() {
    super();
  }

  public fetchLlamas(): Llama[] {
    return this.llamas;
  }

  public fetchSingleLlama(id: string): Llama | undefined {
    return this.llamas.find((llama) => llama.id === id);
  }
}
