export declare class ShelterQueries {
    getOneShelterQuery(id: string): Promise<{
        name: any;
        adress: any;
        cityID: any;
    }[]>;
    getAllShelterQuery(): Promise<{
        name: any;
        adress: any;
        cityID: any;
    }[]>;
    createShelterQuery(name: string, adress: string, cityID: number): Promise<void>;
    updateShelterQuery(id: string, name: string, adress: string, cityID: number): Promise<void>;
    deleteShelterQuery(id: string): Promise<void>;
    if(error: any): void;
}
