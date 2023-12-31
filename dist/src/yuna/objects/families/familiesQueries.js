"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamiliesQueries = void 0;
const db_1 = require("../../../../db");
class FamiliesQueries {
    async getOneFamilyQuery(id) {
        const { data, error } = await db_1.default
            .from('families')
            .select('*')
            .eq('id_family', id);
        if (error) {
            console.error('Error fetching family:', error);
            throw error;
        }
        return data;
    }
    async getAllFamiliesQuery() {
        const { data, error } = await db_1.default
            .from('families')
            .select('*');
        if (error) {
            console.error('Error fetching families:', error);
            throw error;
        }
        return data;
    }
    async createFamilyQuery(lastname, firstname, adress, phone, city) {
        const { data, error } = await db_1.default
            .from('families')
            .insert([
            { lastname: lastname, firstname: firstname, adress: adress, phone: phone, city: city },
        ])
            .select();
        if (error) {
            console.error('Error create family:', error);
            throw error;
        }
    }
    async updateFamiliesQuery(id, lastname, firstname, adress, phone, city) {
        const { data, error } = await db_1.default
            .from('families')
            .update({ lastname: lastname, firstname: firstname, adress: adress, phone: phone, city: city })
            .eq('id_family', id)
            .select();
        if (error) {
            console.error('Error update family:', error);
            throw error;
        }
    }
    async deleteFamiliesQuery(id) {
        const { error } = await db_1.default
            .from('families')
            .delete()
            .eq('id_family', id);
        if (error) {
            console.error('Error delete family:', error);
            throw error;
        }
    }
}
exports.FamiliesQueries = FamiliesQueries;
//# sourceMappingURL=familiesQueries.js.map