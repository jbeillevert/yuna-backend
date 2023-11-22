import { AuthRepository } from './auth.repository';
import { user } from './user.model';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly authRepository;
    private readonly jwt;
    constructor(authRepository: AuthRepository, jwt: JwtService);
    private errorUserEmailAlreadyExist;
    private errorUserDontExist;
    private errorWrongPassword;
    createAUser(email: string, password: string): Promise<string | void>;
    logAUser(email: string, password: string): Promise<void | {
        message: string;
        token: string;
    }>;
    showAllUsers(): Promise<AuthRepository[]>;
    validateUserById(userId: number): Promise<user>;
}
