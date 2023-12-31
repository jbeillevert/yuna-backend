export declare class FamiliesQueries {
    getOneFamilyQuery(id: number): Promise<any[]>;
    getAllFamiliesQuery(): Promise<any[]>;
    createFamilyQuery(lastname: string, firstname: string, adress: string, phone: string, city: string): Promise<any[]>;
    updateFamiliesQuery(id: number, lastname: string, firstname: string, adress: string, phone: string, city: string): Promise<any[]>;
    deleteFamiliesQuery(id: number): Promise<void>;
}
