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
exports.FamiliesService = void 0;
const common_1 = require("@nestjs/common");
const familiesQueries_1 = require("./familiesQueries");
let FamiliesService = class FamiliesService {
    constructor(FamiliesQueries) {
        this.FamiliesQueries = FamiliesQueries;
        this.FamiliesList = [];
    }
    async createFamiliesService(lastname, firstname, adress, phone, city) {
        try {
            return await this.FamiliesQueries.createFamilyQuery(lastname, firstname, adress, phone, city);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async updateFamiliesService(id, lastname, firstname, adress, phone, city) {
        try {
            return await this.FamiliesQueries.updateFamiliesQuery(id, lastname, firstname, adress, phone, city);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getAllFamiliesService() {
        try {
            return await this.FamiliesQueries.getAllFamiliesQuery();
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async getOneFamiliesService(id) {
        try {
            return await this.FamiliesQueries.getOneFamilyQuery(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
    async deleteFamiliesService(id) {
        try {
            return await this.FamiliesQueries.deleteFamiliesQuery(id);
        }
        catch (error) {
            throw new common_1.BadRequestException(error.message);
        }
    }
};
exports.FamiliesService = FamiliesService;
exports.FamiliesService = FamiliesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [familiesQueries_1.FamiliesQueries])
], FamiliesService);
//# sourceMappingURL=families.service.js.map