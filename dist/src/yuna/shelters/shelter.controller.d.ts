import { ShelterService } from './shelter.service';
import { ShelterDto } from './shelter.dto';
export declare class ShelterController {
    private shelterService;
    constructor(shelterService: ShelterService);
    getAllShelters(): Promise<any>;
    getOneShelter(id: string, req: any): Promise<any>;
    createShelter(ShelterDto: ShelterDto, req: any): Promise<void>;
    updateShelter(id: string, ShelterDto: ShelterDto, req: any): Promise<void>;
    deleteShelter(id: string, req: any): Promise<void>;
}
