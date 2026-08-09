import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';

import { PaginacionDto } from '../../../common/dto/paginacion.dto';
import { MedicamentoService } from '../application/medicamento.service';
import { CreateMedicamentoDto } from '../application/dto/create-medicamento.dto';
import { UpdateMedicamentoDto } from '../application/dto/update-medicamento.dto';

@Controller('medicamentos')
export class MedicamentoController {
  constructor(private readonly medicamentoService: MedicamentoService) {}

  @Post()
  crear(@Body() createDto: CreateMedicamentoDto) {
    return this.medicamentoService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.medicamentoService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.medicamentoService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateMedicamentoDto,
  ) {
    return this.medicamentoService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.medicamentoService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}
