import { CreateUserDto, LoginDto } from './dto/user.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authservice;
    constructor(authservice: AuthService);
    createAUser(createUserDto: CreateUserDto): Promise<string | void>;
    logAUser(loginDto: LoginDto): Promise<void | {
        message: string;
        token: string;
    }>;
}
