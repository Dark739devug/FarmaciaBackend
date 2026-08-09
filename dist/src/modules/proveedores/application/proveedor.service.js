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
exports.ProveedorService = void 0;
const common_1 = require("@nestjs/common");
const base_service_1 = require("../../../common/base/base.service");
const proveedor_repository_1 = require("../infrastructure/proveedor.repository");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const logs_proveedor_entity_1 = require("../domain/logs-proveedor.entity");
let ProveedorService = class ProveedorService extends base_service_1.BaseService {
    proveedorRepository;
    logRepository;
    constructor(proveedorRepository, logRepository) {
        super(proveedorRepository, 'Proveedor');
        this.proveedorRepository = proveedorRepository;
        this.logRepository = logRepository;
    }
    async crear(crearDto) {
        const nuevoProveedor = await super.crear(crearDto);
        const hora = new Date().toLocaleTimeString('es-GT');
        const fecha = new Date().toLocaleDateString('es-GT');
        const descripcion = `[CREAR] Proveedor ${nuevoProveedor.nombre_proveedor} generado el día ${fecha} a las ${hora}`;
        await this.logRepository.save({
            descripcion,
        });
        return nuevoProveedor;
    }
    async actualizar(id, updateDto) {
        const proveedorActualizado = await super.actualizar(id, updateDto);
        const hora = new Date().toLocaleTimeString('es-GT');
        const fecha = new Date().toLocaleDateString('es-GT');
        const descripcion = `[ACTUALIZAR] Proveedor ${proveedorActualizado.nombre_proveedor} actualizado el día ${fecha} a las ${hora}`;
        await this.logRepository.save({
            descripcion,
        });
        return proveedorActualizado;
    }
};
exports.ProveedorService = ProveedorService;
exports.ProveedorService = ProveedorService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, typeorm_1.InjectRepository)(logs_proveedor_entity_1.LogsProveedor)),
    __metadata("design:paramtypes", [proveedor_repository_1.ProveedorRepository,
        typeorm_2.Repository])
], ProveedorService);
//# sourceMappingURL=proveedor.service.js.map