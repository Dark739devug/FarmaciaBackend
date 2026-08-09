import { IsBoolean, IsDateString, IsInt, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateCompraDto {
  @IsInt()
  @Min(1)
  id_proveedor: number;

  @IsOptional()
  @IsDateString()
  fecha_compra?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  total_compra?: number;

  @IsOptional()
  @IsBoolean()
  estado_compra?: boolean;

}
