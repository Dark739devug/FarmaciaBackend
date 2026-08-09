"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PresentacionesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const presentacion_service_1 = require("./application/presentacion.service");
const presentacion_entity_1 = require("./domain/presentacion.entity");
const presentacion_repository_1 = require("./infrastructure/presentacion.repository");
const presentacion_controller_1 = require("./presentation/presentacion.controller");
let PresentacionesModule = class PresentacionesModule {
};
exports.PresentacionesModule = PresentacionesModule;
exports.PresentacionesModule = PresentacionesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([presentacion_entity_1.Presentacion])],
        controllers: [presentacion_controller_1.PresentacionController],
        providers: [presentacion_service_1.PresentacionService, presentacion_repository_1.PresentacionRepository],
        exports: [presentacion_service_1.PresentacionService, presentacion_repository_1.PresentacionRepository],
    })
], PresentacionesModule);
//# sourceMappingURL=presentaciones.module.js.map