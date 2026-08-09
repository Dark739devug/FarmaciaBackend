import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseService } from '../../../common/base/base.service';
import { ClienteService } from '../../clientes/application/cliente.service';
import { Venta } from '../domain/venta.entity';
import { VentaRepository } from '../infrastructure/venta.repository';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';
import { LogsVenta } from '../domain/logs-venta.entity';

@Injectable()
export class VentaService extends BaseService<
  Venta,
  CreateVentaDto,
  UpdateVentaDto
> {
  constructor(
    private readonly ventaRepository: VentaRepository,
    private readonly clienteService: ClienteService,

    @InjectRepository(LogsVenta)
    private readonly logRepository: Repository<LogsVenta>,
  ) {
    super(ventaRepository, 'Venta');
  }

  async crear(crearDto: CreateVentaDto): Promise<Venta> {
    if (!crearDto.id_cliente) {
      const consumidorFinal =
        await this.clienteService.obtenerOCrearConsumidorFinal();
      crearDto.id_cliente = consumidorFinal.id_cliente;
    }

    const nuevaVenta = await super.crear(crearDto);

    const hora = new Date().toLocaleTimeString('es-GT');
    const fecha = new Date().toLocaleDateString('es-GT');

    const descripcion =
      `[CREAR] Venta #${nuevaVenta.id_venta} registrada el día ${fecha} a las ${hora}`;

    await this.logRepository.save({
      descripcion,
    });

    return nuevaVenta;
  }

  async actualizar(
    id: number,
    updateDto: UpdateVentaDto,
  ): Promise<Venta> {
    const ventaActualizada = await super.actualizar(id, updateDto);

    const hora = new Date().toLocaleTimeString('es-GT');
    const fecha = new Date().toLocaleDateString('es-GT');

    const descripcion =
      `[ACTUALIZAR] Venta #${ventaActualizada.id_venta} actualizada el día ${fecha} a las ${hora}`;

    await this.logRepository.save({
      descripcion,
    });

    return ventaActualizada;
  }

  async eliminar(id: number): Promise<void> {
    const venta = await this.ventaRepository.buscarPorId(id);

    await super.eliminar(id);

    const hora = new Date().toLocaleTimeString('es-GT');
    const fecha = new Date().toLocaleDateString('es-GT');

    const descripcion =
      `[ELIMINAR] Venta #${venta?.id_venta} eliminada el día ${fecha} a las ${hora}`;

    await this.logRepository.save({
      descripcion,
    });
  }
}