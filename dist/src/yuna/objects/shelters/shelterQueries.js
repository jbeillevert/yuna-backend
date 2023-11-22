"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShelterQueries = void 0;
const db_1 = require("../../../../db");
class ShelterQueries {
    async getOneShelterQuery(id) {
        const { data, error } = await db_1.default
            .from('shelter')
            .select('name, adress, cityID')
            .eq('id', id);
        if (error) {
            console.error('Error fetching shelters:', error);
            throw error;
        }
        return data;
    }
    async getAllShelterQuery() {
        const { data, error } = await db_1.default
            .from('shelter')
            .select('name, adress, cityID');
        if (error) {
            console.error('Error fetching shelters:', error);
            throw error;
        }
        return data;
    }
    async createShelterQuery(name, adress, city) {
        const { data, error } = await db_1.default
            .from('shelter')
            .insert([
            { name: name, adress: adress, cityID: city },
        ])
            .select();
        if (error) {
            console.error('Error create shelter:', error);
            throw error;
        }
    }
}
exports.ShelterQueries = ShelterQueries;
//# sourceMappingURL=shelterQueries.js.map