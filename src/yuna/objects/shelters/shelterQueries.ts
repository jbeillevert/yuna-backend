import supabase from "../../../../db";

export class ShelterQueries {

    async getOneShelterQuery(id: string) {
        const { data, error } = await supabase
            .from('shelter')
            .select('name, adress, cityID')
            .eq('id', id)


        if (error) {
            console.error('Error fetching shelters:', error);
            throw error;
        }

        return data
    }


    async getAllShelterQuery() {
        const { data, error } = await supabase
            .from('shelter')
            .select('name, adress, cityID')


        if (error) {
            console.error('Error fetching shelters:', error);
            throw error;
        }

        return data
    }

    async createShelterQuery(name: string, adress: string, city: number) {
        const { data, error } = await supabase
            .from('shelter')
            .insert([
                { name: name, adress: adress, cityID: city },
            ])
            .select()

            if (error) {
                console.error('Error create shelter:', error);
                throw error;
            }

            
    }


}

