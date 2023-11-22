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
    createShelterQuery(name: string, adress: string, city: number): Promise<void>;
}
