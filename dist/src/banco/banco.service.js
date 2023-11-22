"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoService = void 0;
const common_1 = require("@nestjs/common");
const banco_repository_1 = require("./banco.repository");
let BancoService = class BancoService {
    constructor(bancoRepository) {
        this.bancoRepository = bancoRepository;
        this.accountsList = [];
    }
    async findAnAccount(accountNumber) {
        const account = await this.bancoRepository.getOneAccountRepository(accountNumber);
        return account.length > 0 ? account[0] : undefined;
    }
    async findAnAccountWithUserID(accountNumber, userId) {
        const account = await this.bancoRepository.getOneAccountWithUserIDRepository(accountNumber, userId);
        return account.length > 0 ? account[0] : undefined;
    }
    errorAccountDontExist(accountNumber) {
        throw new common_1.NotFoundException('Erreur', { cause: new Error(), description: `Le compte n°${accountNumber} n'existe pas.` });
    }
    errorAccountAlreadyExist() {
        throw new common_1.ForbiddenException('Erreur', { cause: new Error(), description: `Essayez avec un autre numéro de compte.` });
    }
    errorMissingInfo() {
        throw new common_1.BadRequestException(`Erreur : Une ou plusieurs informations sont manquantes.`);
    }
    errorLackAmount() {
        throw new common_1.ForbiddenException(`Erreur : Retrait impossible, votre solde est insuffisant.`);
    }
    async createAnAccount(accountNumber, amount, userId) {
        const accountExist = await this.findAnAccount(accountNumber);
        console.log("ici je log account exist : ", accountExist);
        if (accountExist) {
            this.errorAccountAlreadyExist();
        }
        if (accountNumber && amount) {
            await this.bancoRepository.createAnAccountRepository(accountNumber, amount, userId);
            return `Le compte n°${accountNumber} à bien été ajouté à l'utilisateur n°${userId}`;
        }
        else {
            this.errorMissingInfo();
        }
    }
    async depositAmount(accountNumber, depositAmount, userId) {
        const accountExist = await this.findAnAccountWithUserID(accountNumber, userId);
        if (!accountExist) {
            this.errorAccountDontExist(accountNumber);
        }
        const accountOwner = accountExist.user_id;
        const userIsAccountOwner = accountOwner === userId;
        if (userIsAccountOwner) {
            const newAmount = accountExist.amount += depositAmount;
            await this.bancoRepository.depositAmountRepository(accountNumber, newAmount);
            return `La somme de ${depositAmount}€ a été déposée sur le compte n°${accountNumber}`;
        }
        else {
            this.errorAccountDontExist(accountNumber);
        }
    }
    async withdrawAmount(accountNumber, withdrawAmount, userId) {
        const accountExist = await this.findAnAccountWithUserID(accountNumber, userId);
        if (!accountExist) {
            this.errorAccountDontExist(accountNumber);
        }
        const accountOwner = accountExist.user_id;
        const userIsAccountOwner = accountOwner === userId;
        if (userIsAccountOwner) {
            if (accountExist.amount >= withdrawAmount) {
                const newAmount = accountExist.amount -= withdrawAmount;
                await this.bancoRepository.withdrawAmountRepository(accountNumber, newAmount);
                return `La somme de ${withdrawAmount}€ a été retirée du compte n°${accountNumber}`;
            }
            else {
                this.errorLackAmount();
            }
        }
        else {
            this.errorAccountDontExist(accountNumber);
        }
    }
    async showAllAccounts(userId) {
        return await this.bancoRepository.getAllAccountsRepository(userId);
    }
    async showOneAccount(accountNumber, userId) {
        const accountExist = await this.findAnAccountWithUserID(accountNumber, userId);
        if (!accountExist) {
            this.errorAccountDontExist(accountNumber);
        }
        const accountOwner = accountExist.user_id;
        const userIsAccountOwner = accountOwner === userId;
        if (userIsAccountOwner) {
            return accountExist;
        }
        else {
            this.errorAccountDontExist(accountNumber);
        }
    }
    async deleteOneAccount(accountNumber, userId) {
        const accountExist = await this.findAnAccountWithUserID(accountNumber, userId);
        if (!accountExist) {
            this.errorAccountDontExist(accountNumber);
        }
        const accountOwner = accountExist.user_id;
        const userIsAccountOwner = accountOwner === userId;
        if (userIsAccountOwner) {
            await this.bancoRepository.deleteOneAccountRepository(accountNumber, userId);
            return `Le compte n°${accountNumber} a bien été supprimé.`;
        }
        else {
            this.errorAccountDontExist(accountNumber);
        }
    }
};
exports.BancoService = BancoService;
exports.BancoService = BancoService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [banco_repository_1.BancoRepository])
], BancoService);
//# sourceMappingURL=banco.service.js.map