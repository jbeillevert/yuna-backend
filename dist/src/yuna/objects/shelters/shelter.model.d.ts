import { City } from "src/yuna/infos/cities/city.model";
export declare class ShelterModel {
    id: number;
    name: string;
    adress: string;
    cityId: City;
    constructor(id: number, name: string, adress: string, cityId: City);
}
