import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WorkService } from './work.service';
import { createWorkDto, updateWorkDto } from './dto';

@Controller('work')
export class WorkController {
  constructor(private readonly workService: WorkService) {}

  @Post()
  create(@Body() createWorkDto: createWorkDto) {
    return this.workService.create(createWorkDto);
  }

  @Get()
  findAll() {
    return this.workService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.workService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateWorkDto: updateWorkDto) {
    return this.workService.update(id, updateWorkDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.workService.remove(id);
  }
}
