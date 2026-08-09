import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { Proveedor } from '../domain/proveedor.entity';

@Injectable()
export class ProveedorRepository extends BaseRepository<Proveedor> {
  constructor(
    @InjectRepository(Proveedor)
    repositorio: Repository<Proveedor>,
  ) {
    super(repositorio, 'id_proveedor');
  }
}
