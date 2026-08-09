"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MedicamentosModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const medicamento_service_1 = require("./application/medicamento.service");
const medicamento_entity_1 = require("./domain/medicamento.entity");
const medicamento_repository_1 = require("./infrastructure/medicamento.repository");
const medicamento_controller_1 = require("./presentation/medicamento.controller");
let MedicamentosModule = class MedicamentosModule {
};
exports.MedicamentosModule = MedicamentosModule;
exports.MedicamentosModule = MedicamentosModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([medicamento_entity_1.Medicamento])],
        controllers: [medicamento_controller_1.MedicamentoController],
        providers: [medicamento_service_1.MedicamentoService, medicamento_repository_1.MedicamentoRepository],
        exports: [medicamento_service_1.MedicamentoService, medicamento_repository_1.MedicamentoRepository],
    })
], MedicamentosModule);
//# sourceMappingURL=medicamentos.module.js.map