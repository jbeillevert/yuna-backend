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
exports.ShelterController = void 0;
const common_1 = require("@nestjs/common");
const shelter_service_1 = require("./shelter.service");
const shelter_dto_1 = require("./shelter.dto");
let ShelterController = class ShelterController {
    constructor(shelterService) {
        this.shelterService = shelterService;
    }
    async getAllShelters() {
        return this.shelterService.getAllShelterService();
    }
    async getOneShelter(id, req) {
        return this.shelterService.getOneShelterService(id);
    }
    async createShelter(createShelterDto, req) {
        const { name, adress, cityID } = createShelterDto;
        return this.shelterService.createShelterService(name, adress, cityID);
    }
};
exports.ShelterController = ShelterController;
__decorate([
    (0, common_1.Get)('/'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ShelterController.prototype, "getAllShelters", null);
__decorate([
    (0, common_1.Get)('/:id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Object]),
    __metadata("design:returntype", Promise)
], ShelterController.prototype, "getOneShelter", null);
__decorate([
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [shelter_dto_1.CreateShelterDto, Object]),
    __metadata("design:returntype", Promise)
], ShelterController.prototype, "createShelter", null);
exports.ShelterController = ShelterController = __decorate([
    (0, common_1.Controller)('api/shelter'),
    __metadata("design:paramtypes", [shelter_service_1.ShelterService])
], ShelterController);
//# sourceMappingURL=shelter.controller.js.map