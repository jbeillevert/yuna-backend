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
exports.BancoController = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
const banco_service_1 = require("./banco.service");
const create_account_dto_1 = require("./dto/create-account.dto");
const process_account_dto_1 = require("./dto/process-account.dto");
let BancoController = class BancoController {
    constructor(bancoservice) {
        this.bancoservice = bancoservice;
    }
    getAllAcounts(req) {
        const userId = req.user.uuid;
        return this.bancoservice.showAllAccounts(userId);
    }
    getOneAccount(id, req) {
        const userId = req.user.uuid;
        return this.bancoservice.showOneAccount(id, userId);
    }
    deleteOneAccount(id, req) {
        const userId = req.user.uuid;
        return this.bancoservice.deleteOneAccount(id, userId);
    }
    createAnAccount(createAccountDto, req) {
        const userId = req.user.uuid;
        const { accountNumber, amount } = createAccountDto;
        return this.bancoservice.createAnAccount(accountNumber, amount, userId);
    }
    depositAmount(id, depositAmountDto, req) {
        const userId = req.user.uuid;
        const { depositAmount } = depositAmountDto;
        return this.bancoservice.depositAmount(id, depositAmount, userId);
    }
    withdrawAmount(id, withdrawAmountDto, req) {
        const userId = req.user.uuid;
        const { withdrawAmount } = withdrawAmountDto;
        return this.bancoservice.withdrawAmount(id, withdrawAmount, userId);
    }
};
exports.BancoController = BancoController;
__decorate([
    (0, common_1.Get)('/'),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], BancoController.prototype, "getAllAcounts", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BancoController.prototype, "getOneAccount", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], BancoController.prototype, "deleteOneAccount", null);
__decorate([
    (0, common_1.Post)('/'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_account_dto_1.CreateAccountDto, Object]),
    __metadata("design:returntype", void 0)
], BancoController.prototype, "createAnAccount", null);
__decorate([
    (0, common_1.Put)('deposit/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, process_account_dto_1.DepositAmountDto, Object]),
    __metadata("design:returntype", void 0)
], BancoController.prototype, "depositAmount", null);
__decorate([
    (0, common_1.Put)('withdraw/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, process_account_dto_1.WithdrawAmountDto, Object]),
    __metadata("design:returntype", void 0)
], BancoController.prototype, "withdrawAmount", null);
exports.BancoController = BancoController = __decorate([
    (0, common_1.Controller)('api/banco'),
    (0, common_1.UseGuards)((0, passport_1.AuthGuard)('jwt')),
    __metadata("design:paramtypes", [banco_service_1.BancoService])
], BancoController);
//# sourceMappingURL=banco.controller.js.map