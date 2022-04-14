"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getLlamas(parent, args, context) {
    // check auth
    return context.dataSources.llamas.fetchLlamas();
}
exports.default = {
    llamas: getLlamas,
};
