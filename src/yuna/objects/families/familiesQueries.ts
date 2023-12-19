import supabase from "../../../../db";


export class FamiliesQueries {

    async getOneFamilyQuery(id: string) {
        const { data, error } = await supabase
            .from('families')
            .select('*')
            .eq('id', id)


        if (error) {
            console.error('Error fetching family:', error);
            throw error;
        }

        return data
    }


    async getAllFamiliesQuery() {
        const { data, error } = await supabase
            .from('families')
            .select('*')


        if (error) {
            console.error('Error fetching families:', error);
            throw error;
        }

        return data
    }

    async createFamilyQuery(lastname: string, firstname: string, adress: string, phone: string, cityId: number) {
        const { data, error } = await supabase
            .from('families')
            .insert([
                { lastname: lastname, firstname: firstname, adress: adress, phone: phone, cityID: cityId },
            ])
            .select()

            if (error) {
                console.error('Error create family:', error);
                throw error;
            }            
    }

    async updateFamiliesQuery(id: string, lastname: string, firstname: string, adress: string, phone: string, cityId: number) {
        const { data, error } = await supabase
            .from('families')
            .update({ lastname: lastname, firstname: firstname, adress: adress, phone: phone, cityID: cityId })
            .eq('id', id)
            .select()

            if (error) {
                console.error('Error update family:', error);
                throw error;
            }          
    }

    async deleteFamiliesQuery(id: string) {
        const { error } = await supabase
            .from('families')
            .delete()
            .eq('id', id)


            if (error) {
                console.error('Error delete family:', error);
                throw error;
            }     
    }



}

