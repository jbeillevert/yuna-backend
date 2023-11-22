import { BancoService } from './banco.service';
import { CreateAccountDto } from './dto/create-account.dto';
import { DepositAmountDto, WithdrawAmountDto } from './dto/process-account.dto';
export declare class BancoController {
    private readonly bancoservice;
    constructor(bancoservice: BancoService);
    getAllAcounts(req: any): Promise<import("./bankAccount.model").bankAccount[]>;
    getOneAccount(id: number, req: any): Promise<import("./bankAccount.model").bankAccount>;
    deleteOneAccount(id: number, req: any): Promise<String>;
    createAnAccount(createAccountDto: CreateAccountDto, req: any): Promise<string | Error>;
    depositAmount(id: number, depositAmountDto: DepositAmountDto, req: any): Promise<string | Error>;
    withdrawAmount(id: number, withdrawAmountDto: WithdrawAmountDto, req: any): Promise<string | Error>;
}
