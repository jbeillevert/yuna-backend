import { FamiliesQueries } from './familiesQueries';
import { FamiliesModel } from './families.model';
export declare class FamiliesService {
    private readonly FamiliesQueries;
    constructor(FamiliesQueries: FamiliesQueries);
    FamiliesList: FamiliesModel[];
    createFamiliesService(lastname: string, firstname: string, adress: string, phone: string, city: string): Promise<any[]>;
    updateFamiliesService(id: number, lastname: string, firstname: string, adress: string, phone: string, city: string): Promise<any[]>;
    getAllFamiliesService(): Promise<any[]>;
    getOneFamiliesService(id: number): Promise<any[]>;
    deleteFamiliesService(id: number): Promise<void>;
}
