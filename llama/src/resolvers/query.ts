import { Context } from "apollo-server-core";
import { Llama, ResolversParentTypes } from "../../typeGen/llamaTypes";
import { Icontext } from "../serverFactory";

function getLlamas(
  parent: ResolversParentTypes,
  args: any,
  context: Context<Icontext>
): Llama[] | undefined {
  // check auth
  return context.dataSources.llamas.fetchLlamas();
}

export default {
  llamas: getLlamas,
};
