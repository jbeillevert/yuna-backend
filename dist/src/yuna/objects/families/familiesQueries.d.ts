export declare class FamiliesQueries {
    getOneFamilyQuery(id: number): Promise<any[]>;
    getAllFamiliesQuery(): Promise<any[]>;
    createFamilyQuery(lastname: string, firstname: string, adress: string, phone: string, city: string): Promise<void>;
    updateFamiliesQuery(id: number, lastname: string, firstname: string, adress: string, phone: string, city: string): Promise<void>;
    deleteFamiliesQuery(id: number): Promise<void>;
}
