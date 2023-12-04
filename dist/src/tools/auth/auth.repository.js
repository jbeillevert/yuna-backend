"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthRepository = void 0;
const userQueries_1 = require("./userQueries");
class AuthRepository {
    async getAllUsersRepository() {
        return await (0, userQueries_1.getAllUsersQuery)();
    }
    async createAUserRepository(email, hashedPassword) {
        return await (0, userQueries_1.createAUserQuery)(email, hashedPassword);
    }
    async isUserExistInDBRepository(emailTested) {
        return await (0, userQueries_1.isUserExistInDBQuery)(emailTested);
    }
    async findUserByEmailRepository(email) {
        return await (0, userQueries_1.findUserByEmailQuery)(email);
    }
    async findUserByIdRepository(userId) {
        return await (0, userQueries_1.findUserByIdQuery)(userId);
    }
}
exports.AuthRepository = AuthRepository;
//# sourceMappingURL=auth.repository.js.map