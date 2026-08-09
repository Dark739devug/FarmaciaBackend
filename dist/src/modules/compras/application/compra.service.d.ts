import { BaseService } from '../../../common/base/base.service';
import { Compra } from '../domain/compra.entity';
import { CompraRepository } from '../infrastructure/compra.repository';
import { CreateCompraDto } from './dto/create-compra.dto';
import { UpdateCompraDto } from './dto/update-compra.dto';
export declare class CompraService extends BaseService<Compra, CreateCompraDto, UpdateCompraDto> {
    private readonly compraRepository;
    constructor(compraRepository: CompraRepository);
}
