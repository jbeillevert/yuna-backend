"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findUserByIdQuery = exports.findUserByEmailQuery = exports.isUserExistInDBQuery = exports.createAUserQuery = exports.getAllUsersQuery = void 0;
const getAllUsersQuery = async () => {
    return knex.select('*').from('users');
};
exports.getAllUsersQuery = getAllUsersQuery;
const createAUserQuery = async (email, hashedPassword) => {
    return knex.insert({ email: email, hashed_password: hashedPassword }).into('users');
};
exports.createAUserQuery = createAUserQuery;
const isUserExistInDBQuery = async (emailTested) => {
    const result = await knex.select('*').from('users').where('email', '=', emailTested);
    return result.length > 0;
};
exports.isUserExistInDBQuery = isUserExistInDBQuery;
const findUserByEmailQuery = async (email) => {
    const result = await knex.select('*').from('users').where('email', '=', email);
    return result[0];
};
exports.findUserByEmailQuery = findUserByEmailQuery;
const findUserByIdQuery = async (userId) => {
    const result = await knex.select('*').from('users').where('uuid', '=', userId);
    return result[0];
};
exports.findUserByIdQuery = findUserByIdQuery;
//# sourceMappingURL=userQueries.js.map