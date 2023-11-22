export declare class AuthRepository {
    getAllUsersRepository(): Promise<any>;
    createAUserRepository(email: string, hashedPassword: string): Promise<any>;
    isUserExistInDBRepository(emailTested: string): Promise<boolean>;
    findUserByEmailRepository(email: string): Promise<any>;
    findUserByIdRepository(userId: any): Promise<any>;
}
