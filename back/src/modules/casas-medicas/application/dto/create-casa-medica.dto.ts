import { IsBoolean, IsOptional, IsString, MaxLength } from 'class-validator';

export class CreateCasaMedicaDto {
  @IsString()
  @MaxLength(150)
  nombre_casa_medica: string;

  @IsOptional()
  @IsBoolean()
  estado_casa_medica?: boolean;

}
