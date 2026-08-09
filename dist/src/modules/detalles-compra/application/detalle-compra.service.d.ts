import { BaseService } from '../../../common/base/base.service';
import { DetalleCompra } from '../domain/detalle-compra.entity';
import { DetalleCompraRepository } from '../infrastructure/detalle-compra.repository';
import { CreateDetalleCompraDto } from './dto/create-detalle-compra.dto';
import { UpdateDetalleCompraDto } from './dto/update-detalle-compra.dto';
export declare class DetalleCompraService extends BaseService<DetalleCompra, CreateDetalleCompraDto, UpdateDetalleCompraDto> {
    private readonly detalleCompraRepository;
    constructor(detalleCompraRepository: DetalleCompraRepository);
}
