"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoRepository = void 0;
const accountQueries_1 = require("./db/accountQueries");
class BancoRepository {
    async getAllAccountsRepository(userId) {
        return await (0, accountQueries_1.getAllAccountsQuery)(userId);
    }
    async getOneAccountRepository(accountNumber) {
        return await (0, accountQueries_1.getOneAccountQuery)(accountNumber);
    }
    async getOneAccountWithUserIDRepository(accountNumber, userId) {
        return await (0, accountQueries_1.getOneAccountWithUserIDQuery)(accountNumber, userId);
    }
    async deleteOneAccountRepository(accountNumber, userId) {
        return await (0, accountQueries_1.deleteOneAccountQuery)(accountNumber, userId);
    }
    async createAnAccountRepository(accountNumber, amount, userId) {
        return await (0, accountQueries_1.createAnAccountQuery)(accountNumber, amount, userId);
    }
    async depositAmountRepository(accountNumber, newAmount) {
        return await (0, accountQueries_1.depositAmountQuery)(accountNumber, newAmount);
    }
    async withdrawAmountRepository(accountNumber, newAmount) {
        return await (0, accountQueries_1.withdrawAmountQuery)(accountNumber, newAmount);
    }
}
exports.BancoRepository = BancoRepository;
//# sourceMappingURL=banco.repository.js.map