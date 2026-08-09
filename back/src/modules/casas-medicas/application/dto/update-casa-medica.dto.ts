import { PartialType } from '@nestjs/mapped-types';

import { CreateCasaMedicaDto } from './create-casa-medica.dto';

export class UpdateCasaMedicaDto extends PartialType(CreateCasaMedicaDto) {}
