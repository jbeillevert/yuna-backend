import { ShelterService } from './shelter.service';
import { ShelterDto } from './shelter.dto';
export declare class ShelterController {
    private shelterService;
    constructor(shelterService: ShelterService);
    getAllShelters(): Promise<{
        name: any;
        adress: any;
        cityID: any;
    }[]>;
    getOneShelter(id: string, req: any): Promise<{
        name: any;
        adress: any;
        cityID: any;
    }[]>;
    createShelter(ShelterDto: ShelterDto, req: any): Promise<void>;
    updateShelter(id: string, ShelterDto: ShelterDto, req: any): Promise<void>;
    deleteShelter(id: string, req: any): Promise<void>;
}
