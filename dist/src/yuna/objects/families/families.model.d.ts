import { City } from "src/yuna/infos/cities/city.model";
import { Experience } from "src/yuna/infos/experiences/experience.model";
import { Species } from "src/yuna/infos/species/species.model";
export declare class Families {
    id: number;
    creationDate: Date;
    lastname: string;
    firstname: string;
    adress: string;
    phone: number;
    cityId: City;
    experienceId: Experience;
    speciesToleranceId: Species;
    constructor(id: number, creationDate: Date, lastname: string, firstname: string, adress: string, phone: number, cityId: City, experienceId: Experience, speciesToleranceId: Species);
}
