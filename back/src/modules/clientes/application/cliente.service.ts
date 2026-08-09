import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Cliente } from '../domain/cliente.entity';
import { ClienteRepository } from '../infrastructure/cliente.repository';
import { CreateClienteDto } from './dto/create-cliente.dto';
import { UpdateClienteDto } from './dto/update-cliente.dto';

@Injectable()
export class ClienteService extends BaseService<
  Cliente,
  CreateClienteDto,
  UpdateClienteDto
> {
  constructor(private readonly clienteRepository: ClienteRepository) {
    super(clienteRepository, 'Cliente');
  }

  /**
   * Busca el cliente CONSUMIDOR FINAL (NIT: CF).
   * Si no existe, lo crea una sola vez y retorna la entidad.
   */
  async obtenerOCrearConsumidorFinal(): Promise<Cliente> {
    const existente = await this.clienteRepository.buscarPorNit('CF');
    if (existente) {
      return existente;
    }

    return this.clienteRepository.crear({
      nombre_cliente: 'CONSUMIDOR FINAL',
      nit_cliente: 'CF',
    });
  }

  async eliminar(id: number): Promise<void> {
  const cliente = await this.clienteRepository.buscarPorId(id);

  if (!cliente) {
    throw new NotFoundException('Cliente no encontrado');
  }

  if (
    cliente.id_cliente === 1 ||
    cliente.nit_cliente?.toUpperCase() === 'CF'
  ) {
    throw new BadRequestException(
      'No se puede eliminar el cliente por defecto',
    );
  }

  await this.clienteRepository.actualizar(id, {
    estado_cliente: false,
  });
}
  
}
