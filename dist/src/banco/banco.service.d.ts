import { BancoRepository } from './banco.repository';
import { bankAccount } from './bankAccount.model';
export declare class BancoService {
    private readonly bancoRepository;
    constructor(bancoRepository: BancoRepository);
    accountsList: bankAccount[];
    private findAnAccount;
    private findAnAccountWithUserID;
    private errorAccountDontExist;
    private errorAccountAlreadyExist;
    private errorMissingInfo;
    private errorLackAmount;
    createAnAccount(accountNumber: number, amount: number, userId: number): Promise<string | Error>;
    depositAmount(accountNumber: number, depositAmount: number, userId: number): Promise<string | Error>;
    withdrawAmount(accountNumber: number, withdrawAmount: number, userId: number): Promise<string | Error>;
    showAllAccounts(userId: number): Promise<bankAccount[]>;
    showOneAccount(accountNumber: number, userId: number): Promise<bankAccount>;
    deleteOneAccount(accountNumber: number, userId: number): Promise<String>;
}
