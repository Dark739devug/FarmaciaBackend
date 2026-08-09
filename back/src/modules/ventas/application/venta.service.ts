import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { ClienteService } from '../../clientes/application/cliente.service';
import { Venta } from '../domain/venta.entity';
import { VentaRepository } from '../infrastructure/venta.repository';
import { CreateVentaDto } from './dto/create-venta.dto';
import { UpdateVentaDto } from './dto/update-venta.dto';

@Injectable()
export class VentaService extends BaseService<
  Venta,
  CreateVentaDto,
  UpdateVentaDto
> {
  constructor(
    private readonly ventaRepository: VentaRepository,
    private readonly clienteService: ClienteService,
  ) {
    super(ventaRepository, 'Venta');
  }

  /**
   * Si no se proporciona id_cliente, asigna automáticamente
   * el cliente CONSUMIDOR FINAL (NIT: CF).
   */
  async crear(crearDto: CreateVentaDto): Promise<Venta> {
    if (!crearDto.id_cliente) {
      const consumidorFinal =
        await this.clienteService.obtenerOCrearConsumidorFinal();
      crearDto.id_cliente = consumidorFinal.id_cliente;
    }

    return super.crear(crearDto);
  }
}
