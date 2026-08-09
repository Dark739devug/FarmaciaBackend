import {
  DeepPartial,
  FindOptionsWhere,
  ObjectLiteral,
  Repository,
} from 'typeorm';
import { NotFoundException } from '@nestjs/common';

/**
 * Capa de acceso a datos generica.
 * Encapsula TypeORM para que los servicios no dependan del ORM directamente.
 */
export abstract class BaseRepository<T extends ObjectLiteral> {
  protected constructor(
    protected readonly repositorio: Repository<T>,
    protected readonly llavePrimaria: string,
  ) {}

  crear(datos: DeepPartial<T>): Promise<T> {
    const entidad = this.repositorio.create(datos);
    return this.repositorio.save(entidad);
  }

  listar(pagina: number, limite: number): Promise<[T[], number]> {
    return this.repositorio.findAndCount({
      skip: (pagina - 1) * limite,
      take: limite,
      order: { [this.llavePrimaria]: 'ASC' } as never,
    });
  }

  buscarPorId(id: number): Promise<T | null> {
    return this.repositorio.findOne({
      where: { [this.llavePrimaria]: id } as FindOptionsWhere<T>,
    });
  }

  async actualizar(id: number, datos: DeepPartial<T>): Promise<T | null> {
    const entidad = await this.repositorio.preload({
      [this.llavePrimaria]: id,
      ...datos,
    } as DeepPartial<T>);
    if (!entidad) return null;
    return this.repositorio.save(entidad);
  }

  async eliminar(id: number): Promise<{message: string}> {
    const resultado = await this.repositorio.delete(id);
    if ((resultado.affected ?? 0) === 0) {
      throw new NotFoundException(`Entidad con id ${id} no encontrada`);
    }
    return{
      message: `Entidad con id ${id} eliminada correctamente`,
    };
  }
}
