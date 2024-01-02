import supabase from "../../../db";


export class FamiliesQueries {

    async getOneFamilyQuery(id: number) {
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

    async createFamilyQuery(lastname: string, firstname: string, adress: string, phone: string, city: string) {
        const { data, error } = await supabase
            .from('families')
            .insert([
                { lastname: lastname, firstname: firstname, adress: adress, phone: phone, city: city },
            ])
            .select()

            console.log("voila mes data : ", data )
            if (error) {
                console.error('Error create family:', error);
                throw error;
            } 
            
            return data
    }

    async updateFamiliesQuery(id: number, lastname: string, firstname: string, adress: string, phone: string, city: string) {
        const { data, error } = await supabase
            .from('families')
            .update({ lastname: lastname, firstname: firstname, adress: adress, phone: phone, city: city })
            .eq('id', id)
            .select()

            if (error) {
                console.error('Error update family:', error);
                throw error;
            } 
            
            return data
    }

    async deleteFamiliesQuery(id: number) {
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

