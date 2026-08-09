"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LotesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const lote_service_1 = require("./application/lote.service");
const lote_entity_1 = require("./domain/lote.entity");
const lote_repository_1 = require("./infrastructure/lote.repository");
const lote_controller_1 = require("./presentation/lote.controller");
let LotesModule = class LotesModule {
};
exports.LotesModule = LotesModule;
exports.LotesModule = LotesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([lote_entity_1.Lote])],
        controllers: [lote_controller_1.LoteController],
        providers: [lote_service_1.LoteService, lote_repository_1.LoteRepository],
        exports: [lote_service_1.LoteService, lote_repository_1.LoteRepository],
    })
], LotesModule);
//# sourceMappingURL=lotes.module.js.map