import { FamiliesService } from './families.service';
import { FamiliesDto } from './families.dto';
export declare class FamiliesController {
    private familiesService;
    constructor(familiesService: FamiliesService);
    getAllFamilies(): Promise<any[]>;
    getOneFamily(id: string, req: any): Promise<any[]>;
    createFamily(FamiliesDto: FamiliesDto, req: any): Promise<void>;
    updateFamily(id: string, FamiliesDto: FamiliesDto, req: any): Promise<void>;
    deleteFamily(id: string, req: any): Promise<void>;
}
