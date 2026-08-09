import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Proveedor } from '../domain/proveedor.entity';
import { ProveedorRepository } from '../infrastructure/proveedor.repository';
import { CreateProveedorDto } from './dto/create-proveedor.dto';
import { UpdateProveedorDto } from './dto/update-proveedor.dto';

@Injectable()
export class ProveedorService extends BaseService<
  Proveedor,
  CreateProveedorDto,
  UpdateProveedorDto
> {
  constructor(private readonly proveedorRepository: ProveedorRepository) {
    super(proveedorRepository, 'Proveedor');
  }
}
