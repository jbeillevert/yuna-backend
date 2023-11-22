"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BancoModule = void 0;
const common_1 = require("@nestjs/common");
const banco_service_1 = require("./banco.service");
const banco_controller_1 = require("./banco.controller");
const banco_repository_1 = require("./banco.repository");
let BancoModule = class BancoModule {
};
exports.BancoModule = BancoModule;
exports.BancoModule = BancoModule = __decorate([
    (0, common_1.Module)({
        controllers: [banco_controller_1.BancoController],
        providers: [banco_service_1.BancoService, banco_repository_1.BancoRepository]
    })
], BancoModule);
//# sourceMappingURL=banco.module.js.map