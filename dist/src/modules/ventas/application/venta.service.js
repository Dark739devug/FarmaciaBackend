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
exports.VentaService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const base_service_1 = require("../../../common/base/base.service");
const cliente_service_1 = require("../../clientes/application/cliente.service");
const venta_repository_1 = require("../infrastructure/venta.repository");
const logs_venta_entity_1 = require("../domain/logs-venta.entity");
let VentaService = class VentaService extends base_service_1.BaseService {
    ventaRepository;
    clienteService;
    logRepository;
    constructor(ventaRepository, clienteService, logRepository) {
        super(ventaRepository, 'Venta');
        this.ventaRepository = ventaRepository;
        this.clienteService = clienteService;
        this.logRepository = logRepository;
    }
    async crear(crearDto) {
        if (!crearDto.id_cliente) {
            const consumidorFinal = await this.clienteService.obtenerOCrearConsumidorFinal();
            crearDto.id_cliente = consumidorFinal.id_cliente;
        }
        const nuevaVenta = await super.crear(crearDto);
        const hora = new Date().toLocaleTimeString('es-GT');
        const fecha = new Date().toLocaleDateString('es-GT');
        const descripcion = `[CREAR] Venta #${nuevaVenta.id_venta} registrada el día ${fecha} a las ${hora}`;
        await this.logRepository.save({
            descripcion,
        });
        return nuevaVenta;
    }
    async actualizar(id, updateDto) {
        const ventaActualizada = await super.actualizar(id, updateDto);
        const hora = new Date().toLocaleTimeString('es-GT');
        const fecha = new Date().toLocaleDateString('es-GT');
        const descripcion = `[ACTUALIZAR] Venta #${ventaActualizada.id_venta} actualizada el día ${fecha} a las ${hora}`;
        await this.logRepository.save({
            descripcion,
        });
        return ventaActualizada;
    }
    async eliminar(id) {
        const venta = await this.ventaRepository.buscarPorId(id);
        await super.eliminar(id);
        const hora = new Date().toLocaleTimeString('es-GT');
        const fecha = new Date().toLocaleDateString('es-GT');
        const descripcion = `[ELIMINAR] Venta #${venta?.id_venta} eliminada el día ${fecha} a las ${hora}`;
        await this.logRepository.save({
            descripcion,
        });
    }
};
exports.VentaService = VentaService;
exports.VentaService = VentaService = __decorate([
    (0, common_1.Injectable)(),
    __param(2, (0, typeorm_1.InjectRepository)(logs_venta_entity_1.LogsVenta)),
    __metadata("design:paramtypes", [venta_repository_1.VentaRepository,
        cliente_service_1.ClienteService,
        typeorm_2.Repository])
], VentaService);
//# sourceMappingURL=venta.service.js.map