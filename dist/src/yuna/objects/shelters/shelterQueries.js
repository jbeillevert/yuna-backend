"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelterQueries = void 0;
const db_1 = require("../../../../db");
class ShelterQueries {
    async getAllShelterQuery() {
        const { data, error } = await db_1.default
            .from('shelter')
            .select('*');
        return data;
    }
}
exports.ShelterQueries = ShelterQueries;
//# sourceMappingURL=shelterQueries.js.map