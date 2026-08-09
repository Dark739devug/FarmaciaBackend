import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { MedicamentoService } from '../application/medicamento.service';
import { CreateMedicamentoDto } from '../application/dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from '../application/dto/update-medicamento.dto';
export declare class MedicamentoController {
    private readonly medicamentoService;
    constructor(medicamentoService: MedicamentoService);
    crear(createDto: CreateMedicamentoDto): Promise<import("../domain/medicamento.entity").Medicamento>;
    listar(paginacionDto: PaginacionDto): Promise<import("../../../common/dto/respuesta-paginada.interface").RespuestaPaginada<import("../domain/medicamento.entity").Medicamento>>;
    buscarPorId(id: number): Promise<import("../domain/medicamento.entity").Medicamento>;
    actualizar(id: number, updateDto: UpdateMedicamentoDto): Promise<import("../domain/medicamento.entity").Medicamento>;
    eliminar(id: number): Promise<{
        mensaje: string;
    }>;
}
