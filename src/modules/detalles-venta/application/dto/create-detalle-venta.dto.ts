import { IsBoolean, IsInt, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateDetalleVentaDto {
  @IsInt()
  @Min(1)
  id_venta: number;

  @IsInt()
  @Min(1)
  id_medicamento: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  id_lote?: number;

  @IsInt()
  @Min(0)
  cantidad_detalle_venta: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  subtotal_detalle_venta?: number;

  @IsOptional()
  @IsBoolean()
  estado_detalle_venta?: boolean;

}
