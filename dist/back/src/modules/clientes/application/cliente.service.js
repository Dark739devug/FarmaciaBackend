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
exports.ClienteService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../common/base/base.service");
const cliente_repository_1 = require("../infrastructure/cliente.repository");
let ClienteService = class ClienteService extends base_service_1.BaseService {
    clienteRepository;
    constructor(clienteRepository) {
        super(clienteRepository, 'Cliente');
        this.clienteRepository = clienteRepository;
    }
    async obtenerOCrearConsumidorFinal() {
        const existente = await this.clienteRepository.buscarPorNit('CF');
        if (existente) {
            return existente;
        }
        return this.clienteRepository.crear({
            nombre_cliente: 'CONSUMIDOR FINAL',
            nit_cliente: 'CF',
        });
    }
    async eliminar(id) {
        const cliente = await this.clienteRepository.buscarPorId(id);
        if (!cliente) {
            throw new common_1.NotFoundException('Cliente no encontrado');
        }
        if (cliente.id_cliente === 1 ||
            cliente.nit_cliente?.toUpperCase() === 'CF') {
            throw new common_1.BadRequestException('No se puede eliminar el cliente por defecto');
        }
        await this.clienteRepository.actualizar(id, {
            estado_cliente: false,
        });
    }
};
exports.ClienteService = ClienteService;
exports.ClienteService = ClienteService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [cliente_repository_1.ClienteRepository])
], ClienteService);
//# sourceMappingURL=cliente.service.js.map