"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatfactService = void 0;
const common_1 = require("@nestjs/common");
let CatfactService = class CatfactService {
    async getCatfactService() {
        const url = 'https://catfact.ninja/fact';
        try {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        }
        catch (error) {
            console.error('Error : ', error);
            throw error;
        }
    }
};
exports.CatfactService = CatfactService;
exports.CatfactService = CatfactService = __decorate([
    (0, common_1.Injectable)()
], CatfactService);
//# sourceMappingURL=catfact.service.js.map