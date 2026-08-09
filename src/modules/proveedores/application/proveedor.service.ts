import { Injectable } from '@nestjs/common';
import { BaseService } from '../../../common/base/base.service';
import { Proveedor } from '../domain/proveedor.entity';
import { ProveedorRepository } from '../infrastructure/proveedor.repository';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LogsProveedor } from '../domain/logs-proveedor.entity';

@Injectable()
export class ProveedorService extends BaseService<
  Proveedor,
  CreateProveedorDto,
  UpdateProveedorDto
> {
  constructor(
    private readonly proveedorRepository: ProveedorRepository,
    @InjectRepository(LogsProveedor)
    private readonly logRepository: Repository<LogsProveedor>,
  ) {
    super(proveedorRepository, 'Proveedor');
  }

  async crear(crearDto: CreateProveedorDto): Promise<Proveedor> {
    const nuevoProveedor = await super.crear(crearDto);

    const hora = new Date().toLocaleTimeString('es-GT');
    const fecha = new Date().toLocaleDateString('es-GT');

    const descripcion =
      `[CREAR] Proveedor ${nuevoProveedor.nombre_proveedor} generado el día ${fecha} a las ${hora}`;

    await this.logRepository.save({
      descripcion,
    });

    return nuevoProveedor;
  }

  async actualizar(
    id: number,
    updateDto: UpdateProveedorDto,
  ): Promise<Proveedor> {
    const proveedorActualizado = await super.actualizar(id, updateDto);

    const hora = new Date().toLocaleTimeString('es-GT');
    const fecha = new Date().toLocaleDateString('es-GT');

    const descripcion =
      `[ACTUALIZAR] Proveedor ${proveedorActualizado.nombre_proveedor} actualizado el día ${fecha} a las ${hora}`;

    await this.logRepository.save({
      descripcion,
    });

    return proveedorActualizado;
  }
}