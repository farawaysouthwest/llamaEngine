import { DataSource } from "apollo-datasource";
import { Color, Saddle } from "../../typeGen/llamaTypes";

export default class SaddleDatasource extends DataSource {
  constructor() {
    super();
  }

  public fetchSaddle(id: string): Saddle | undefined {
    const saddles: Saddle[] = [
      {
        id: "1",
        color: Color.Black,
        name: "black leather saddle",
      },
      {
        id: "2",
        color: Color.Brown,
        name: "brown blanket saddle",
      },
    ];

    return saddles.find((saddle) => saddle.id === id);
  }
}
