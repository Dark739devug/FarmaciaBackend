import { ObjectLiteral } from 'typeorm';
import { PaginacionDto } from '../dto/paginacion.dto';
import { RespuestaPaginada } from '../dto/respuesta-paginada.interface';
import { BaseRepository } from './base.repository';
export declare abstract class BaseService<T extends ObjectLiteral, CrearDto, ActualizarDto> {
    protected readonly repositorio: BaseRepository<T>;
    protected readonly nombreEntidad: string;
    protected constructor(repositorio: BaseRepository<T>, nombreEntidad: string);
    crear(crearDto: CrearDto): Promise<T>;
    listar(paginacionDto: PaginacionDto): Promise<RespuestaPaginada<T>>;
    buscarPorId(id: number): Promise<T>;
    actualizar(id: number, actualizarDto: ActualizarDto): Promise<T>;
    eliminar(id: number): Promise<void>;
}
