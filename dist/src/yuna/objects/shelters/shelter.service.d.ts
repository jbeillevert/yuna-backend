import { ShelterQueries } from './shelterQueries';
import { ShelterModel } from './shelter.model';
export declare class ShelterService {
    private readonly shelterQueries;
    constructor(shelterQueries: ShelterQueries);
    shelterList: ShelterModel[];
    createShelterService(name: string, adress: string, cityID: number): Promise<void>;
    updateShelterService(id: string, name: string, adress: string, cityID: number): Promise<void>;
    getAllShelterService(): Promise<{
        name: any;
        adress: any;
        cityID: any;
    }[]>;
    getOneShelterService(id: string): Promise<{
        name: any;
        adress: any;
        cityID: any;
    }[]>;
    deleteShelterService(id: string): Promise<void>;
}
