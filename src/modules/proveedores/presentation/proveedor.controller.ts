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
import { ProveedorService } from '../application/proveedor.service';
import { CreateProveedorDto } from '../application/dto/create-proveedor.dto';
import { UpdateProveedorDto } from '../application/dto/update-proveedor.dto';

@Controller('proveedores')
export class ProveedorController {
  constructor(private readonly proveedorService: ProveedorService) {}

  @Post()
  crear(@Body() createDto: CreateProveedorDto) {
    return this.proveedorService.crear(createDto);
  }

  @Get()
  listar(@Query() paginacionDto: PaginacionDto) {
    return this.proveedorService.listar(paginacionDto);
  }

  @Get(':id')
  buscarPorId(@Param('id', ParseIntPipe) id: number) {
    return this.proveedorService.buscarPorId(id);
  }

  @Patch(':id')
  actualizar(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateDto: UpdateProveedorDto,
  ) {
    return this.proveedorService.actualizar(id, updateDto);
  }

  @Delete(':id')
  async eliminar(@Param('id', ParseIntPipe) id: number) {
    await this.proveedorService.eliminar(id);
    return { mensaje: 'Eliminado exitosamente' };
  }
}
