import knex from "../../../../db";
import supabase from "../../../../db";

export class ShelterQueries {

    
}

const getAllShelterQuery = async () {
    let { data: shelter, error } = await supabase
    .from('shelter')
    .select('*') 
}