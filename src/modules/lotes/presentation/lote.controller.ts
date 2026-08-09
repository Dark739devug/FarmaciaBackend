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
import { LoteService } from '../application/lote.service';
import { CreateLoteDto } from '../application/dto/create-lote.dto';
import { UpdateLoteDto } from '../application/dto/update-lote.dto';

@Controller('lotes')
export class LoteController {
  constructor(private readonly loteService: LoteService) {}

  @Post()
  crear(@Body() createDto: CreateLoteDto) {
    return this.loteService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.loteService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.loteService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateLoteDto,
  ) {
    return this.loteService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.loteService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}
