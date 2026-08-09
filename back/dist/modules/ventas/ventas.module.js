"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VentasModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const clientes_module_1 = require("../clientes/clientes.module");
const venta_service_1 = require("./application/venta.service");
const venta_entity_1 = require("./domain/venta.entity");
const venta_repository_1 = require("./infrastructure/venta.repository");
const venta_controller_1 = require("./presentation/venta.controller");
let VentasModule = class VentasModule {
};
exports.VentasModule = VentasModule;
exports.VentasModule = VentasModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([venta_entity_1.Venta]), clientes_module_1.ClientesModule],
        controllers: [venta_controller_1.VentaController],
        providers: [venta_service_1.VentaService, venta_repository_1.VentaRepository],
        exports: [venta_service_1.VentaService, venta_repository_1.VentaRepository],
    })
], VentasModule);
//# sourceMappingURL=ventas.module.js.map