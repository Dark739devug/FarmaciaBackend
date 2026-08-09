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
exports.VentaService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../common/base/base.service");
const cliente_service_1 = require("../../clientes/application/cliente.service");
const venta_repository_1 = require("../infrastructure/venta.repository");
let VentaService = class VentaService extends base_service_1.BaseService {
    ventaRepository;
    clienteService;
    constructor(ventaRepository, clienteService) {
        super(ventaRepository, 'Venta');
        this.ventaRepository = ventaRepository;
        this.clienteService = clienteService;
    }
    async crear(crearDto) {
        if (!crearDto.id_cliente) {
            const consumidorFinal = await this.clienteService.obtenerOCrearConsumidorFinal();
            crearDto.id_cliente = consumidorFinal.id_cliente;
        }
        return super.crear(crearDto);
    }
};
exports.VentaService = VentaService;
exports.VentaService = VentaService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [venta_repository_1.VentaRepository,
        cliente_service_1.ClienteService])
], VentaService);
//# sourceMappingURL=venta.service.js.map