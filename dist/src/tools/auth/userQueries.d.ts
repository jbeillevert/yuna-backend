export declare class UserQueries {
    createUserQuery(email: string, password: string): Promise<void>;
    getAllusersQuery(): Promise<{
        id: any;
        email: any;
        shelterID: any;
    }[]>;
    findUserByIdQuery(id: string): Promise<void>;
    findUserByEmailQuery(email: string): Promise<{
        id: any;
        email: any;
        password: any;
        roleID: any;
    }[]>;
    isUserExistInDBQuery(emailTested: string): Promise<{
        email: any;
    }[]>;
}
