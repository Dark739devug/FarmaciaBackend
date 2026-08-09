import { IsBoolean, IsInt, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateDetalleCompraDto {
  @IsInt()
  @Min(1)
  id_compra: number;

  @IsInt()
  @Min(1)
  id_proveedor: number;

  @IsInt()
  @Min(1)
  id_medicamento: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  id_lote?: number;

  @IsInt()
  @Min(0)
  cantidad_compra: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  subtotal_compra?: number;

  @IsOptional()
  @IsBoolean()
  estado_compra?: boolean;

}
