import { Species } from "../species/species.model";
export declare class Race {
    id: number;
    experience: string;
    speciesId: Species;
    constructor(id: number, experience: string, speciesId: Species);
}
