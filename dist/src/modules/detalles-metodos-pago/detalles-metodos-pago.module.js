"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallesMetodosPagoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const detalle_metodo_pago_service_1 = require("./application/detalle-metodo-pago.service");
const detalle_metodo_pago_entity_1 = require("./domain/detalle-metodo-pago.entity");
const detalle_metodo_pago_repository_1 = require("./infrastructure/detalle-metodo-pago.repository");
const detalle_metodo_pago_controller_1 = require("./presentation/detalle-metodo-pago.controller");
let DetallesMetodosPagoModule = class DetallesMetodosPagoModule {
};
exports.DetallesMetodosPagoModule = DetallesMetodosPagoModule;
exports.DetallesMetodosPagoModule = DetallesMetodosPagoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([detalle_metodo_pago_entity_1.DetalleMetodoPago])],
        controllers: [detalle_metodo_pago_controller_1.DetalleMetodoPagoController],
        providers: [detalle_metodo_pago_service_1.DetalleMetodoPagoService, detalle_metodo_pago_repository_1.DetalleMetodoPagoRepository],
        exports: [detalle_metodo_pago_service_1.DetalleMetodoPagoService, detalle_metodo_pago_repository_1.DetalleMetodoPagoRepository],
    })
], DetallesMetodosPagoModule);
//# sourceMappingURL=detalles-metodos-pago.module.js.map