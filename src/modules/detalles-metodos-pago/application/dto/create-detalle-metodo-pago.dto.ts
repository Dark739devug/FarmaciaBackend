import { IsBoolean, IsInt, IsNumber, IsOptional, Min } from 'class-validator';

export class CreateDetalleMetodoPagoDto {
  @IsInt()
  @Min(1)
  id_venta: number;

  @IsInt()
  @Min(1)
  id_metodo_pago: number;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @Min(0)
  cantidad_detalle_metodos_pago?: number;

  @IsOptional()
  @IsBoolean()
  estado_detalle_metodos_pago?: boolean;

}
