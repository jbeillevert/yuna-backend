import { ShelterService } from './shelter.service';
import { CreateShelterDto } from './shelter.dto';
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
    createShelter(createShelterDto: CreateShelterDto, req: any): Promise<void>;
}
