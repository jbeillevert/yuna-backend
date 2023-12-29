export declare class FamiliesQueries {
    getOneFamilyQuery(id: string): Promise<any[]>;
    getAllFamiliesQuery(): Promise<any[]>;
    createFamilyQuery(lastname: string, firstname: string, adress: string, phone: string, cityId: number): Promise<void>;
    updateFamiliesQuery(id: string, lastname: string, firstname: string, adress: string, phone: string, cityId: number): Promise<void>;
    deleteFamiliesQuery(id: string): Promise<void>;
}
