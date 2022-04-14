"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_datasource_1 = require("apollo-datasource");
class LlamaDatasource extends apollo_datasource_1.DataSource {
    constructor() {
        super();
    }
    fetchLlamas() {
        const llamas = [
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
exports.default = LlamaDatasource;
