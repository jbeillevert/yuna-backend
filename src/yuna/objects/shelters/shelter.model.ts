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