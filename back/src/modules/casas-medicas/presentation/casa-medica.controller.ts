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
import { CasaMedicaService } from '../application/casa-medica.service';
import { CreateCasaMedicaDto } from '../application/dto/create-casa-medica.dto';
import { UpdateCasaMedicaDto } from '../application/dto/update-casa-medica.dto';

@Controller('casas-medicas')
export class CasaMedicaController {
  constructor(private readonly casaMedicaService: CasaMedicaService) {}

  @Post()
  crear(@Body() createDto: CreateCasaMedicaDto) {
    return this.casaMedicaService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.casaMedicaService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.casaMedicaService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateCasaMedicaDto,
  ) {
    return this.casaMedicaService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.casaMedicaService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}
