import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { Cliente } from '../domain/cliente.entity';

@Injectable()
export class ClienteRepository extends BaseRepository<Cliente> {
  constructor(
    @InjectRepository(Cliente)
    repositorio: Repository<Cliente>,
  ) {
    super(repositorio, 'id_cliente');
  }

  buscarPorNit(nit: string): Promise<Cliente | null> {
    return this.repositorio.findOne({
      where: { nit_cliente: nit },
    });
  }
}
