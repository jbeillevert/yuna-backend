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
    async createShelterQuery(name, adress, cityID) {
        const { data, error } = await db_1.default
            .from('shelter')
            .insert([
            { name: name, adress: adress, cityID: cityID },
        ])
            .select();
        if (error) {
            console.error('Error create shelter:', error);
            throw error;
        }
    }
    async updateShelterQuery(id, name, adress, cityID) {
        const { data, error } = await db_1.default
            .from('shelter')
            .update({ name: name, adress: adress, cityID: cityID })
            .eq('id', id)
            .select();
        if (error) {
            console.error('Error update shelter:', error);
            throw error;
        }
    }
    async deleteShelterQuery(id) {
        const { error } = await db_1.default
            .from('shelter')
            .delete()
            .eq('id', id);
    }
    if(error) {
        console.error('Error delete shelter:', error);
        throw error;
    }
}
exports.ShelterQueries = ShelterQueries;
//# sourceMappingURL=shelterQueries.js.map