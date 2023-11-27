import { Timestamp } from "typeorm";
export declare class user {
    id: string;
    created_at: Timestamp;
    email: string;
    password: string;
    shelterID: number;
    roleID: string;
    constructor(id: string, created_at: Timestamp, email: string, password: string, shelterID: number, roleID: string);
}
