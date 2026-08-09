"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleMetodoPagoController = void 0;
const common_1 = require("@nestjs/common");
const paginacion_dto_1 = require("../../../common/dto/paginacion.dto");
const detalle_metodo_pago_service_1 = require("../application/detalle-metodo-pago.service");
const create_detalle_metodo_pago_dto_1 = require("../application/dto/create-detalle-metodo-pago.dto");
const update_detalle_metodo_pago_dto_1 = require("../application/dto/update-detalle-metodo-pago.dto");
let DetalleMetodoPagoController = class DetalleMetodoPagoController {
    detalleMetodoPagoService;
    constructor(detalleMetodoPagoService) {
        this.detalleMetodoPagoService = detalleMetodoPagoService;
    }
    crear(createDto) {
        return this.detalleMetodoPagoService.crear(createDto);
    }
    listar(paginacionDto) {
        return this.detalleMetodoPagoService.listar(paginacionDto);
    }
    buscarPorId(id) {
        return this.detalleMetodoPagoService.buscarPorId(id);
    }
    actualizar(id, updateDto) {
        return this.detalleMetodoPagoService.actualizar(id, updateDto);
    }
    async eliminar(id) {
        await this.detalleMetodoPagoService.eliminar(id);
        return { mensaje: 'Eliminado exitosamente' };
    }
};
exports.DetalleMetodoPagoController = DetalleMetodoPagoController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_detalle_metodo_pago_dto_1.CreateDetalleMetodoPagoDto]),
    __metadata("design:returntype", void 0)
], DetalleMetodoPagoController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginacion_dto_1.PaginacionDto]),
    __metadata("design:returntype", void 0)
], DetalleMetodoPagoController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DetalleMetodoPagoController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_detalle_metodo_pago_dto_1.UpdateDetalleMetodoPagoDto]),
    __metadata("design:returntype", void 0)
], DetalleMetodoPagoController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DetalleMetodoPagoController.prototype, "eliminar", null);
exports.DetalleMetodoPagoController = DetalleMetodoPagoController = __decorate([
    (0, common_1.Controller)('detalles-metodos-pago'),
    __metadata("design:paramtypes", [detalle_metodo_pago_service_1.DetalleMetodoPagoService])
], DetalleMetodoPagoController);
//# sourceMappingURL=detalle-metodo-pago.controller.js.map