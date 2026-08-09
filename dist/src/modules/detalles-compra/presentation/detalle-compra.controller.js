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
exports.DetalleCompraController = void 0;
const common_1 = require("@nestjs/common");
const paginacion_dto_1 = require("../../../common/dto/paginacion.dto");
const detalle_compra_service_1 = require("../application/detalle-compra.service");
const create_detalle_compra_dto_1 = require("../application/dto/create-detalle-compra.dto");
const update_detalle_compra_dto_1 = require("../application/dto/update-detalle-compra.dto");
let DetalleCompraController = class DetalleCompraController {
    detalleCompraService;
    constructor(detalleCompraService) {
        this.detalleCompraService = detalleCompraService;
    }
    crear(createDto) {
        return this.detalleCompraService.crear(createDto);
    }
    listar(paginacionDto) {
        return this.detalleCompraService.listar(paginacionDto);
    }
    buscarPorId(id) {
        return this.detalleCompraService.buscarPorId(id);
    }
    actualizar(id, updateDto) {
        return this.detalleCompraService.actualizar(id, updateDto);
    }
    async eliminar(id) {
        await this.detalleCompraService.eliminar(id);
        return { mensaje: 'Eliminado exitosamente' };
    }
};
exports.DetalleCompraController = DetalleCompraController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_detalle_compra_dto_1.CreateDetalleCompraDto]),
    __metadata("design:returntype", void 0)
], DetalleCompraController.prototype, "crear", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [paginacion_dto_1.PaginacionDto]),
    __metadata("design:returntype", void 0)
], DetalleCompraController.prototype, "listar", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DetalleCompraController.prototype, "buscarPorId", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_detalle_compra_dto_1.UpdateDetalleCompraDto]),
    __metadata("design:returntype", void 0)
], DetalleCompraController.prototype, "actualizar", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], DetalleCompraController.prototype, "eliminar", null);
exports.DetalleCompraController = DetalleCompraController = __decorate([
    (0, common_1.Controller)('detalles-compra'),
    __metadata("design:paramtypes", [detalle_compra_service_1.DetalleCompraService])
], DetalleCompraController);
//# sourceMappingURL=detalle-compra.controller.js.map