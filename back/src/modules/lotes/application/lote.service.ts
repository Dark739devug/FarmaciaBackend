import { Injectable } from '@nestjs/common';

import { BaseService } from '../../../common/base/base.service';
import { Lote } from '../domain/lote.entity';
import { LoteRepository } from '../infrastructure/lote.repository';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';

@Injectable()
export class LoteService extends BaseService<
  Lote,
  CreateLoteDto,
  UpdateLoteDto
> {
  constructor(private readonly loteRepository: LoteRepository) {
    super(loteRepository, 'Lote');
  }
}
