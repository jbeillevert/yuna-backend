import { Timestamp } from "typeorm";

export class user {
    constructor(
        public id: string,
        public created_at: Timestamp,
        public email: string,
        public password: string,
        public shelterID: number,
        public roleID: string
    ) {}
}