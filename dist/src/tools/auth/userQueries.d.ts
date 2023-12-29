export declare class UserQueries {
    createUserQuery(email: string, password: string): Promise<void>;
    getAllusersQuery(): Promise<{
        id: any;
        email: any;
    }[]>;
    findUserByIdQuery(id: string): Promise<{
        id: any;
        email: any;
    }[]>;
    findUserByEmailQuery(email: string): Promise<{
        id: any;
        email: any;
        password: any;
        role: any;
    }[]>;
    isUserExistInDBQuery(emailTested: string): Promise<{
        email: any;
    }[]>;
}
