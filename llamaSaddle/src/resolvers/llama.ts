import { consumers } from "stream";
import { Llama } from "../../typeGen/llamaTypes";

export default {
  __resolveReference: (llama: Llama) => {
    console.log(llama);
    return { id: llama.saddleId, furColor: llama.furColor };
  },
  saddle: (
    { id, furColor }: { id: string; furColor: string },
    _: any,
    { dataSources }: any
  ) => {
    return dataSources.saddles.fetchSaddle(id, furColor);
  },
};
