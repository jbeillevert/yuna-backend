import { UserQueries } from './userQueries';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly userQueries;
    private readonly jwt;
    constructor(userQueries: UserQueries, jwt: JwtService);
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
    }[]>;
}
