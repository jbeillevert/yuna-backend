import { ShelterQueries } from './shelterQueries';
import { ShelterModel } from './shelter.model';
import { City } from 'src/yuna/infos/cities/city.model';
export declare class ShelterService {
    private readonly shelterQueries;
    constructor(shelterQueries: ShelterQueries);
    shelterList: ShelterModel[];
    createShelterService(name: string, adress: string, cityId: City): Promise<void>;
    updateShelterService(id: number, updateData: Partial<ShelterModel>): Promise<void>;
    getAllShelterService(): Promise<any[]>;
    getOneShelterService(id: number): Promise<void>;
    deleteShelterService(id: number): Promise<void>;
}
