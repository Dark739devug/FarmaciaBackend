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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetalleVentaService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../common/base/base.service");
const detalle_venta_repository_1 = require("../infrastructure/detalle-venta.repository");
let DetalleVentaService = class DetalleVentaService extends base_service_1.BaseService {
    detalleVentaRepository;
    constructor(detalleVentaRepository) {
        super(detalleVentaRepository, 'DetalleVenta');
        this.detalleVentaRepository = detalleVentaRepository;
    }
};
exports.DetalleVentaService = DetalleVentaService;
exports.DetalleVentaService = DetalleVentaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [detalle_venta_repository_1.DetalleVentaRepository])
], DetalleVentaService);
//# sourceMappingURL=detalle-venta.service.js.map