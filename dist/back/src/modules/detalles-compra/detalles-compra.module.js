"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetallesCompraModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const detalle_compra_service_1 = require("./application/detalle-compra.service");
const detalle_compra_entity_1 = require("./domain/detalle-compra.entity");
const detalle_compra_repository_1 = require("./infrastructure/detalle-compra.repository");
const detalle_compra_controller_1 = require("./presentation/detalle-compra.controller");
let DetallesCompraModule = class DetallesCompraModule {
};
exports.DetallesCompraModule = DetallesCompraModule;
exports.DetallesCompraModule = DetallesCompraModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([detalle_compra_entity_1.DetalleCompra])],
        controllers: [detalle_compra_controller_1.DetalleCompraController],
        providers: [detalle_compra_service_1.DetalleCompraService, detalle_compra_repository_1.DetalleCompraRepository],
        exports: [detalle_compra_service_1.DetalleCompraService, detalle_compra_repository_1.DetalleCompraRepository],
    })
], DetallesCompraModule);
//# sourceMappingURL=detalles-compra.module.js.map