export declare class BancoRepository {
    getAllAccountsRepository(userId: number): Promise<any>;
    getOneAccountRepository(accountNumber: number): Promise<any>;
    getOneAccountWithUserIDRepository(accountNumber: number, userId: number): Promise<any>;
    deleteOneAccountRepository(accountNumber: number, userId: number): Promise<any>;
    createAnAccountRepository(accountNumber: number, amount: number, userId: number): Promise<any>;
    depositAmountRepository(accountNumber: number, newAmount: number): Promise<any>;
    withdrawAmountRepository(accountNumber: number, newAmount: number): Promise<any>;
}
