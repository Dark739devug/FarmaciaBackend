import { DeepPartial, ObjectLiteral } from 'typeorm';
import {
  NotFoundException,
  ServiceUnavailableException,
} from '@nestjs/common';

import { PaginacionDto } from '../dto/paginacion.dto';
import { RespuestaPaginada } from '../dto/respuesta-paginada.interface';
import { BaseRepository } from './base.repository';

/**
 * Capa de aplicacion generica (logica de negocio comun a todo CRUD).
 */
export abstract class BaseService<
  T extends ObjectLiteral,
  CrearDto,
  ActualizarDto,
> {
  protected constructor(
    protected readonly repositorio: BaseRepository<T>,
    protected readonly nombreEntidad: string,
  ) {}

  crear(crearDto: CrearDto): Promise<T> {
    return this.repositorio.crear(crearDto as DeepPartial<T>);
  }

 async listar(paginacionDto: PaginacionDto): Promise<RespuestaPaginada<T>> {
  try {
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
  } catch (error) {
    throw new ServiceUnavailableException(
      'La base de datos no está disponible',
    );
  }
}

  async buscarPorId(id: number): Promise<T> {
    const entidad = await this.repositorio.buscarPorId(id);
    if (!entidad) {
      throw new NotFoundException(
        `${this.nombreEntidad} con id ${id} no encontrado`,
      );
    }
    return entidad;
  }

  async actualizar(id: number, actualizarDto: ActualizarDto): Promise<T> {
    const entidad = await this.repositorio.actualizar(
      id,
      actualizarDto as DeepPartial<T>,
    );
    if (!entidad) {
      throw new NotFoundException(
        `${this.nombreEntidad} con id ${id} no encontrado`,
      );
    }
    return entidad;
  }

  async eliminar(id: number): Promise<void> {
    const eliminado = await this.repositorio.eliminar(id);
    if (!eliminado) {
      throw new NotFoundException(
        `${this.nombreEntidad} con id ${id} no encontrado`,
      );
    }
  }
}
    