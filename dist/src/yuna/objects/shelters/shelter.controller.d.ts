import { ShelterService } from './shelter.service';
export declare class ShelterController {
    private shelterService;
    constructor(shelterService: ShelterService);
    getAllShelters(): Promise<any[]>;
}
