import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Rol } from '../domain/rol.entity';
import { RolRepository } from '../infrastructure/rol.repository';
import { CreateRolDto } from './dto/create-rol.dto';
import { UpdateRolDto } from './dto/update-rol.dto';

@Injectable()
export class RolService extends BaseService<
  Rol,
  CreateRolDto,
  UpdateRolDto
> {
  constructor(private readonly rolRepository: RolRepository) {
    super(rolRepository, 'Rol');
  }
}
