"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CasasMedicasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const casa_medica_service_1 = require("./application/casa-medica.service");
const casa_medica_entity_1 = require("./domain/casa-medica.entity");
const casa_medica_repository_1 = require("./infrastructure/casa-medica.repository");
const casa_medica_controller_1 = require("./presentation/casa-medica.controller");
let CasasMedicasModule = class CasasMedicasModule {
};
exports.CasasMedicasModule = CasasMedicasModule;
exports.CasasMedicasModule = CasasMedicasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([casa_medica_entity_1.CasaMedica])],
        controllers: [casa_medica_controller_1.CasaMedicaController],
        providers: [casa_medica_service_1.CasaMedicaService, casa_medica_repository_1.CasaMedicaRepository],
        exports: [casa_medica_service_1.CasaMedicaService, casa_medica_repository_1.CasaMedicaRepository],
    })
], CasasMedicasModule);
//# sourceMappingURL=casas-medicas.module.js.map