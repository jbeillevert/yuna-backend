"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserQueries = void 0;
const db_1 = require("../../../db");
class UserQueries {
    async createUserQuery(email, password) {
        const { data, error } = await db_1.default
            .from('users')
            .insert([
            { email: email, password: password },
        ])
            .select();
        if (error) {
            console.error('Error create user:', error);
            throw error;
        }
    }
    async getAllusersQuery() {
        let { data: users, error } = await db_1.default
            .from('users')
            .select('id,email');
        return users;
    }
    async findUserByIdQuery(id) {
        let { data: user, error } = await db_1.default
            .from('users')
            .select('id,email')
            .eq('id', id);
        return user;
    }
    async findUserByEmailQuery(email) {
        let { data: users, error } = await db_1.default
            .from('users')
            .select('id,email,password,role')
            .eq('email', email);
        return users;
    }
    async isUserExistInDBQuery(emailTested) {
        let { data: users, error } = await db_1.default
            .from('users')
            .select('email')
            .eq('email', emailTested);
        return users;
    }
}
exports.UserQueries = UserQueries;
//# sourceMappingURL=userQueries.js.map