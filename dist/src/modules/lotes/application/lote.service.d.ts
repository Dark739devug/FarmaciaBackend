import { BaseService } from '../../../common/base/base.service';
import { Lote } from '../domain/lote.entity';
import { LoteRepository } from '../infrastructure/lote.repository';
import { CreateLoteDto } from './dto/create-lote.dto';
import { UpdateLoteDto } from './dto/update-lote.dto';
export declare class LoteService extends BaseService<Lote, CreateLoteDto, UpdateLoteDto> {
    private readonly loteRepository;
    constructor(loteRepository: LoteRepository);
}
