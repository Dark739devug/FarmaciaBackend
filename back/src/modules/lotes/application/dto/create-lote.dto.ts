import { IsBoolean, IsDateString, IsInt, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateLoteDto {
  @IsInt()
  @Min(1)
  id_medicamento: number;

  @IsDateString()
  fecha_vencimiento: string;

  @IsOptional()
  @IsDateString()
  fecha_produccion?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  precio_lote?: number;

  @IsOptional()
  @IsBoolean()
  estado_lote?: boolean;

  @IsOptional()
  @IsInt()
  @Min(0)
  existencia_lote?: number;

}
