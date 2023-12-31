import { FamiliesService } from './families.service';
import { FamiliesDto } from './families.dto';
export declare class FamiliesController {
    private familiesService;
    constructor(familiesService: FamiliesService);
    getAllFamilies(): Promise<any[]>;
    getOneFamily(id: number, req: any): Promise<any[]>;
    createFamily(FamiliesDto: FamiliesDto, req: any): Promise<void>;
    updateFamily(id: number, FamiliesDto: FamiliesDto, req: any): Promise<void>;
    deleteFamily(id: number, req: any): Promise<void>;
}
