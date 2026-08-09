import { BaseService } from '../../../common/base/base.service';
import { CasaMedica } from '../domain/casa-medica.entity';
import { CasaMedicaRepository } from '../infrastructure/casa-medica.repository';
import { CreateCasaMedicaDto } from './dto/create-casa-medica.dto';
import { UpdateCasaMedicaDto } from './dto/update-casa-medica.dto';
export declare class CasaMedicaService extends BaseService<CasaMedica, CreateCasaMedicaDto, UpdateCasaMedicaDto> {
    private readonly casaMedicaRepository;
    constructor(casaMedicaRepository: CasaMedicaRepository);
}
