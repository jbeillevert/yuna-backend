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
const userQueries_1 = require("./userQueries");
const bcrypt = require("bcrypt");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(userQueries, jwt) {
        this.userQueries = userQueries;
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
        const emailExist = await this.userQueries.isUserExistInDBQuery(email);
        if (!emailExist) {
            return this.errorUserEmailAlreadyExist(email);
        }
        else {
            try {
                const hashedPassword = await bcrypt.hash(password, 15);
                await this.userQueries.createUserQuery(email, hashedPassword);
                return `L'utilisateur ${email} à bien été inscrit.`;
            }
            catch (error) {
                if (error.code === '23505') {
                    return this.errorUserEmailAlreadyExist(email);
                }
                throw error;
            }
        }
    }
    async logAUser(email, password) {
        const emailExist = await this.userQueries.isUserExistInDBQuery(email);
        if (emailExist) {
            const userConnection = await this.userQueries.findUserByEmailQuery(email);
            const passwordMatch = await bcrypt.compare(password, userConnection[0].password);
            if (passwordMatch) {
                const payload = { userId: userConnection[0].id, email: userConnection[0].email, role: userConnection[0].role };
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
    async validateUserById(userId) {
        return this.userQueries.findUserByIdQuery(userId);
    }
};
exports.AuthService = AuthService;
exports.AuthService = AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [userQueries_1.UserQueries,
        jwt_1.JwtService])
], AuthService);
//# sourceMappingURL=auth.service.js.map