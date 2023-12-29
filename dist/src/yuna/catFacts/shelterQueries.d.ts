export declare class ShelterQueries {
    getOneShelterQuery(id: string): Promise<any>;
    getAllShelterQuery(): Promise<any>;
    createShelterQuery(name: string, adress: string, cityID: number): Promise<void>;
    updateShelterQuery(id: string, name: string, adress: string, cityID: number): Promise<void>;
    deleteShelterQuery(id: string): Promise<void>;
    if(error: any): void;
}
