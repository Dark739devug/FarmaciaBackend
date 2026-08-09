"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RolesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const rol_service_1 = require("./application/rol.service");
const rol_entity_1 = require("./domain/rol.entity");
const rol_repository_1 = require("./infrastructure/rol.repository");
const rol_controller_1 = require("./presentation/rol.controller");
let RolesModule = class RolesModule {
};
exports.RolesModule = RolesModule;
exports.RolesModule = RolesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([rol_entity_1.Rol])],
        controllers: [rol_controller_1.RolController],
        providers: [rol_service_1.RolService, rol_repository_1.RolRepository],
        exports: [rol_service_1.RolService, rol_repository_1.RolRepository],
    })
], RolesModule);
//# sourceMappingURL=roles.module.js.map