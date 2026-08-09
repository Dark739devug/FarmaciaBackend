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
import { PresentacionService } from '../application/presentacion.service';
import { CreatePresentacionDto } from '../application/dto/create-presentacion.dto';
import { UpdatePresentacionDto } from '../application/dto/update-presentacion.dto';

@Controller('presentaciones')
export class PresentacionController {
  constructor(private readonly presentacionService: PresentacionService) {}

  @Post()
  crear(@Body() createDto: CreatePresentacionDto) {
    return this.presentacionService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.presentacionService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.presentacionService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdatePresentacionDto,
  ) {
    return this.presentacionService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.presentacionService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}
