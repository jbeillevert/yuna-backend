import { UUID } from "crypto";
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

    async createShelterQuery(name: string, adress: string, cityID: number) {
        const { data, error } = await supabase
            .from('shelter')
            .insert([
                { name: name, adress: adress, cityID: cityID },
            ])
            .select()

            if (error) {
                console.error('Error create shelter:', error);
                throw error;
            }            
    }

    async updateShelterQuery(id: string, name: string, adress: string, cityID: number) {
        const { data, error } = await supabase
            .from('shelter')
            .update({ name: name, adress: adress, cityID: cityID })
            .eq('id', id)
            .select()

            if (error) {
                console.error('Error update shelter:', error);
                throw error;
            }          
    }

    async deleteShelterQuery(id: string) {
        const { error } = await supabase
            .from('shelter')
            .delete()
            .eq('id', id)
    }

        if (error) {
            console.error('Error delete shelter:', error);
            throw error;
        }     


}

