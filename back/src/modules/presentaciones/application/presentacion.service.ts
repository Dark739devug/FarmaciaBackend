import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Presentacion } from '../domain/presentacion.entity';
import { PresentacionRepository } from '../infrastructure/presentacion.repository';
import { CreatePresentacionDto } from './dto/create-presentacion.dto';
import { UpdatePresentacionDto } from './dto/update-presentacion.dto';

@Injectable()
export class PresentacionService extends BaseService<
  Presentacion,
  CreatePresentacionDto,
  UpdatePresentacionDto
> {
  constructor(private readonly presentacionRepository: PresentacionRepository) {
    super(presentacionRepository, 'Presentacion');
  }
}
