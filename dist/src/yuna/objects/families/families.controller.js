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
exports.FamiliesController = void 0;
const common_1 = require("@nestjs/common");
const families_service_1 = require("./families.service");
const families_dto_1 = require("./families.dto");
let FamiliesController = class FamiliesController {
    constructor(familiesService) {
        this.familiesService = familiesService;
    }
    async getAllFamilies() {
        return this.familiesService.getAllFamiliesService();
    }
    async getOneFamily(id, req) {
        return this.familiesService.getOneFamiliesService(id);
    }
    async createFamily(FamiliesDto, req) {
        const { firstname, lastname, phone, adress, city } = FamiliesDto;
        return this.familiesService.createFamiliesService(lastname, firstname, adress, phone, city);
    }
    async updateFamily(id, FamiliesDto, req) {
        const { firstname, lastname, phone, adress, city } = FamiliesDto;
        return this.familiesService.updateFamiliesService(id, lastname, firstname, adress, phone, city);
    }
    async deleteFamily(id, req) {
        return this.familiesService.deleteFamiliesService(id);
    }
};
exports.FamiliesController = FamiliesController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FamiliesController.prototype, "getAllFamilies", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FamiliesController.prototype, "getOneFamily", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [families_dto_1.FamiliesDto, Object]),
    __metadata("design:returntype", Promise)
], FamiliesController.prototype, "createFamily", null);
__decorate([
    (0, common_1.Put)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, families_dto_1.FamiliesDto, Object]),
    __metadata("design:returntype", Promise)
], FamiliesController.prototype, "updateFamily", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], FamiliesController.prototype, "deleteFamily", null);
exports.FamiliesController = FamiliesController = __decorate([
    (0, common_1.Controller)('api/families'),
    __metadata("design:paramtypes", [families_service_1.FamiliesService])
], FamiliesController);
//# sourceMappingURL=families.controller.js.map