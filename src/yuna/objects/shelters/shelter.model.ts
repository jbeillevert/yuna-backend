import { City } from "src/yuna/infos/cities/city.model";
import { Timestamp } from "typeorm";

export class ShelterModel {
    constructor(
        public id: string,
        public created_at: Timestamp,
        public name: string,
        public adress: string,
        public cityID: number, // clé etrangere vers table Cities
    ) {}
}