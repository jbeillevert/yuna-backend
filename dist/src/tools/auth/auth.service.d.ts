import { UserQueries } from './userQueries';
import { user } from './user.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userQueries;
    private readonly userList;
    private readonly jwt;
    constructor(userQueries: UserQueries, userList: user[], jwt: JwtService);
    private errorUserEmailAlreadyExist;
    private errorUserDontExist;
    private errorWrongPassword;
    createAUser(email: string, password: string): Promise<string | void>;
    logAUser(email: string, password: string): Promise<void | {
        message: string;
        token: string;
    }>;
    validateUserById(userId: string): Promise<{
        id: any;
        email: any;
        shelterID: any;
    }[]>;
}
