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
import { CompraService } from '../application/compra.service';
import { CreateCompraDto } from '../application/dto/create-compra.dto';
import { UpdateCompraDto } from '../application/dto/update-compra.dto';

@Controller('compras')
export class CompraController {
  constructor(private readonly compraService: CompraService) {}

  @Post()
  crear(@Body() createDto: CreateCompraDto) {
    return this.compraService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.compraService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.compraService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateCompraDto,
  ) {
    return this.compraService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.compraService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}
