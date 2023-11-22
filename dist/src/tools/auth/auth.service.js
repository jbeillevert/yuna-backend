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
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_repository_1 = require("./auth.repository");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(authRepository, jwt) {
        this.authRepository = authRepository;
        this.jwt = jwt;
    }
    errorUserEmailAlreadyExist(email) {
        throw new common_1.ConflictException(`Erreur : Création de compte impossible, un compte est déjà lié à l'email ${email}.`);
    }
    errorUserDontExist() {
        throw new common_1.UnauthorizedException(`Erreur : Connexion impossible, identifiants incorrects.`);
    }
    errorWrongPassword() {
        throw new common_1.UnauthorizedException(`Erreur : Connexion impossible, identifiants incorrects.`);
    }
    async createAUser(email, password) {
        const emailExist = await this.authRepository.isUserExistInDBRepository(email);
        if (emailExist) {
            return this.errorUserEmailAlreadyExist(email);
        }
        else {
            const hashedPassword = await bcrypt.hash(password, 15);
            await this.authRepository.createAUserRepository(email, hashedPassword);
            return `L'utilisateur ${email} à bien été inscrit.`;
        }
    }
    async logAUser(email, password) {
        const emailExist = await this.authRepository.isUserExistInDBRepository(email);
        if (emailExist) {
            const userConnection = await this.authRepository.findUserByEmailRepository(email);
            const passwordMatch = await bcrypt.compare(password, userConnection.hashed_password);
            if (passwordMatch) {
                const payload = { userId: userConnection.uuid, email: userConnection.email, role: userConnection.role };
                const token = this.jwt.sign(payload);
                return { message: `Vous êtes maintenant connecté avec ${email}`, token: token };
            }
            else {
                return this.errorWrongPassword();
            }
        }
        else {
            return this.errorUserDontExist();
        }
    }
    async showAllUsers() {
        return await this.authRepository.getAllUsersRepository();
    }
    async validateUserById(userId) {
        return this.authRepository.findUserByIdRepository(userId);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [auth_repository_1.AuthRepository,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map