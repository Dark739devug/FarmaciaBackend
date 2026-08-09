import { IsBoolean, IsDateString, IsInt, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateVentaDto {
  @IsInt()
  @Min(1)
  id_usuario: number;

  @IsOptional()
  @IsInt()
  @Min(1)
  id_cliente?: number;

  @IsOptional()
  @IsDateString()
  fecha_venta?: Date;

  @IsOptional()
  @IsBoolean()
  estado_venta?: boolean;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  total_venta?: number;

}
