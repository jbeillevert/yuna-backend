import { FamiliesService } from './families.service';
import { FamiliesDto } from './families.dto';
export declare class FamiliesController {
    private familiesService;
    constructor(familiesService: FamiliesService);
    getAllFamilies(): Promise<any[]>;
    getOneFamily(id: number, req: any): Promise<any[]>;
    createFamily(FamiliesDto: FamiliesDto, req: any): Promise<any[]>;
    updateFamily(id: number, FamiliesDto: FamiliesDto, req: any): Promise<any[]>;
    deleteFamily(id: number, req: any): Promise<void>;
}
