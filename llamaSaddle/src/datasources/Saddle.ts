import { DataSource } from "apollo-datasource";
import { Color, Saddle } from "../../typeGen/llamaTypes";

export default class SaddleDatasource extends DataSource {
  constructor() {
    super();
  }

  public fetchSaddle(id: string, furColor: string): Saddle | undefined {
    const saddles = [
      {
        id: "100",
        color: Color.Brown,
        name: "black leather saddle",
      },
      {
        id: "200",
        color: Color.Brown,
        name: "brown blanket saddle",
      },
    ] as Saddle[];

    return saddles
      .map(
        (saddle): Saddle => ({
          ...saddle,
          matchFurColor: furColor === saddle.color ? true : false,
        })
      )
      .find((saddle) => saddle.id === id);
  }
}
