import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { BaseRepository } from '../../../common/base/base.repository';
import { Rol } from '../domain/rol.entity';

@Injectable()
export class RolRepository extends BaseRepository<Rol> {
  constructor(
    @InjectRepository(Rol)
    repositorio: Repository<Rol>,
  ) {
    super(repositorio, 'id_rol');
  }
}
