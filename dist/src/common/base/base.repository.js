"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseRepository = void 0;
const common_1 = require("@nestjs/common");
class BaseRepository {
    repositorio;
    llavePrimaria;
    constructor(repositorio, llavePrimaria) {
        this.repositorio = repositorio;
        this.llavePrimaria = llavePrimaria;
    }
    crear(datos) {
        const entidad = this.repositorio.create(datos);
        return this.repositorio.save(entidad);
    }
    listar(pagina, limite) {
        return this.repositorio.findAndCount({
            skip: (pagina - 1) * limite,
            take: limite,
            order: { [this.llavePrimaria]: 'ASC' },
        });
    }
    buscarPorId(id) {
        return this.repositorio.findOne({
            where: { [this.llavePrimaria]: id },
        });
    }
    async actualizar(id, datos) {
        const entidad = await this.repositorio.preload({
            [this.llavePrimaria]: id,
            ...datos,
        });
        if (!entidad)
            return null;
        return this.repositorio.save(entidad);
    }
    async eliminar(id) {
        const resultado = await this.repositorio.delete(id);
        if ((resultado.affected ?? 0) === 0) {
            throw new common_1.NotFoundException(`Entidad con id ${id} no encontrada`);
        }
        return {
            message: `Entidad con id ${id} eliminada correctamente`,
        };
    }
}
exports.BaseRepository = BaseRepository;
//# sourceMappingURL=base.repository.js.map