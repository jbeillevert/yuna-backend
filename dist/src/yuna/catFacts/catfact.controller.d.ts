import { CatfactService } from './catfact.service';
export declare class CatfactController {
    private catfactservice;
    constructor(catfactservice: CatfactService);
    getCatfact(): Promise<any>;
}
