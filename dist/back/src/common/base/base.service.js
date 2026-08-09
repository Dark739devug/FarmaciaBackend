"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseService = void 0;
const common_1 = require("@nestjs/common");
class BaseService {
    repositorio;
    nombreEntidad;
    constructor(repositorio, nombreEntidad) {
        this.repositorio = repositorio;
        this.nombreEntidad = nombreEntidad;
    }
    crear(crearDto) {
        return this.repositorio.crear(crearDto);
    }
    async listar(paginacionDto) {
        const pagina = paginacionDto.pagina ?? 1;
        const limite = paginacionDto.limite ?? 10;
        const [datos, total] = await this.repositorio.listar(pagina, limite);
        return {
            datos,
            total,
            pagina,
            limite,
            paginas: Math.ceil(total / limite),
        };
    }
    async buscarPorId(id) {
        const entidad = await this.repositorio.buscarPorId(id);
        if (!entidad) {
            throw new common_1.NotFoundException(`${this.nombreEntidad} con id ${id} no encontrado`);
        }
        return entidad;
    }
    async actualizar(id, actualizarDto) {
        const entidad = await this.repositorio.actualizar(id, actualizarDto);
        if (!entidad) {
            throw new common_1.NotFoundException(`${this.nombreEntidad} con id ${id} no encontrado`);
        }
        return entidad;
    }
    async eliminar(id) {
        const eliminado = await this.repositorio.eliminar(id);
        if (!eliminado) {
            throw new common_1.NotFoundException(`${this.nombreEntidad} con id ${id} no encontrado`);
        }
    }
}
exports.BaseService = BaseService;
//# sourceMappingURL=base.service.js.map