import { ShelterService } from './shelter.service';
export declare class CatfactController {
    private shelterService;
    constructor(shelterService: ShelterService);
    getCatfact(): Promise<void>;
}
