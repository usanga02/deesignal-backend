import { PartialType } from '@nestjs/mapped-types';
import { createWorkDto } from './createWork.dto';

export class updateWorkDto extends PartialType(createWorkDto) {}
