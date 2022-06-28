import { Llama } from "../../typeGen/llamaTypes";

export default {
  __resolveReference: (llama: Llama) => {
    return { id: llama.saddleId };
  },
  saddle: ({ id }: { id: string }, _: any, { dataSources }: any) => {
    return dataSources.saddles.fetchSaddle(id);
  },
};
