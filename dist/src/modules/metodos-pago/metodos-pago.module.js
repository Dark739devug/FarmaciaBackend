"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MetodosPagoModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const metodo_pago_service_1 = require("./application/metodo-pago.service");
const metodo_pago_entity_1 = require("./domain/metodo-pago.entity");
const metodo_pago_repository_1 = require("./infrastructure/metodo-pago.repository");
const metodo_pago_controller_1 = require("./presentation/metodo-pago.controller");
let MetodosPagoModule = class MetodosPagoModule {
};
exports.MetodosPagoModule = MetodosPagoModule;
exports.MetodosPagoModule = MetodosPagoModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([metodo_pago_entity_1.MetodoPago])],
        controllers: [metodo_pago_controller_1.MetodoPagoController],
        providers: [metodo_pago_service_1.MetodoPagoService, metodo_pago_repository_1.MetodoPagoRepository],
        exports: [metodo_pago_service_1.MetodoPagoService, metodo_pago_repository_1.MetodoPagoRepository],
    })
], MetodosPagoModule);
//# sourceMappingURL=metodos-pago.module.js.map