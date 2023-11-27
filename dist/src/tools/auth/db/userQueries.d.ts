import { UUID } from "crypto";
export declare const getAllUsersQuery: () => Promise<any>;
export declare const createAUserQuery: (email: string, hashedPassword: string) => Promise<any>;
export declare const isUserExistInDBQuery: (emailTested: string) => Promise<boolean>;
export declare const findUserByEmailQuery: (email: string) => Promise<any>;
export declare const findUserByIdQuery: (userId: UUID) => Promise<any>;
