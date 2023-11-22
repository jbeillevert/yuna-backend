import supabase from "../../../../db";

export class ShelterQueries {
    async getAllShelterQuery() {
        
            const { data, error } = await supabase
                .from('shelter')
                .select('*')

            return data

    }

    
}

