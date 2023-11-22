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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthController = void 0;
const common_1 = require("@nestjs/common");
const user_dto_1 = require("./dto/user.dto");
const auth_service_1 = require("./auth.service");
const role_decorators_1 = require("../RBAC/role.decorators");
const roles_guards_1 = require("../RBAC/roles.guards");
const role_enum_1 = require("../RBAC/role.enum");
const passport_1 = require("@nestjs/passport");
let AuthController = class AuthController {
    constructor(authservice) {
        this.authservice = authservice;
    }
    getAllUsers(req) {
        console.log('User in controller:', req.user);
        return this.authservice.showAllUsers();
    }
    createAUser(createUserDto) {
        const { email, password } = createUserDto;
        return this.authservice.createAUser(email, password);
    }
    logAUser(loginDto) {
        const { email, password } = loginDto;
        return this.authservice.logAUser(email, password);
    }
};
exports.AuthController = AuthController;
__decorate([
    (0, common_1.Get)('/users'),
    (0, role_decorators_1.Roles)(role_enum_1.Role.Admin),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt'), roles_guards_1.RolesGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "getAllUsers", null);
__decorate([
    (0, common_1.Post)('/signup'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.CreateUserDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "createAUser", null);
__decorate([
    (0, common_1.Post)('/login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_dto_1.LoginDto]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logAUser", null);
exports.AuthController = AuthController = __decorate([
    (0, common_1.Controller)('/api/'),
    __metadata("design:paramtypes", [auth_service_1.AuthService])
], AuthController);
//# sourceMappingURL=auth.controller.js.map