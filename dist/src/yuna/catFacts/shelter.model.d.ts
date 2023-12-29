import { Timestamp } from "typeorm";
export declare class ShelterModel {
    id: string;
    created_at: Timestamp;
    name: string;
    adress: string;
    cityID: number;
    constructor(id: string, created_at: Timestamp, name: string, adress: string, cityID: number);
}
