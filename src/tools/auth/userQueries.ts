import { UUID } from "crypto";
import supabase from "../../../db";
import { user } from "./user.model";


export class UserQueries {

    async createUserQuery(email: string, password: string) {
        const { data, error } = await supabase
            .from('users')
            .insert([
                { email: email, password: password },
            ])
            .select()

            if (error) {
                console.error('Error create user:', error);
                throw error;
            }     
    }


    async getAllusersQuery() {
        let { data: users, error } = await supabase
            .from('users')
            .select('id,email,shelterID')

        return users
    }

    async findUserByIdQuery(id: string) {
        let { data: user, error } = await supabase
        .from('users')
        .select('id,email,shelterID')
        .eq('id', id)

        return user
    }

    async findUserByEmailQuery(email: string) {
        let { data: users, error } = await supabase
        .from('users')
        .select('id,email,password,roleID')
        .eq('email', email)

        return users
    }

    async isUserExistInDBQuery(emailTested: string) {
        let { data: users, error } = await supabase
        .from('users')
        .select('email')
        .eq('email', emailTested)
        
        return users

    }


}




// export const getAllUsersQuery = async () => {
//     return knex.select('*').from('users')
// }

// export const createAUserQuery = async (email: string, hashedPassword: string) => {
//     return knex.insert({email: email, hashed_password: hashedPassword}).into('users')
// }

// export const isUserExistInDBQuery = async (emailTested: string) => {
//     const result = await knex.select('*').from('users').where('email', '=', emailTested)
//     return result.length > 0
// }

// export const findUserByEmailQuery = async (email: string) => {
//     const result = await knex.select('*').from('users').where('email', '=', email)
//     return result[0]
// }

// export const findUserByIdQuery = async (userId: UUID) => {
//     const result = await knex.select('*').from('users').where('uuid', '=', userId)
//     return result[0]
// }





