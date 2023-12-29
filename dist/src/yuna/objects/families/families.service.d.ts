import { FamiliesQueries } from './familiesQueries';
import { FamiliesModel } from './families.model';
export declare class FamiliesService {
    private readonly FamiliesQueries;
    constructor(FamiliesQueries: FamiliesQueries);
    FamiliesList: FamiliesModel[];
    createFamiliesService(lastname: string, firstname: string, adress: string, phone: string, cityId: number): Promise<void>;
    updateFamiliesService(id: string, lastname: string, firstname: string, adress: string, phone: string, cityId: number): Promise<void>;
    getAllFamiliesService(): Promise<any[]>;
    getOneFamiliesService(id: string): Promise<any[]>;
    deleteFamiliesService(id: string): Promise<void>;
}
