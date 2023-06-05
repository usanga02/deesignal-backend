import { Injectable } from '@nestjs/common';
import { createWorkDto, updateWorkDto } from './dto';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class WorkService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createWorkDto: createWorkDto) {
    return await this.prisma.work.create({ data: createWorkDto });
  }

  async findAll() {
    return await this.prisma.work.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.work.findUnique({ where: { id } });
  }

  async update(id: string, updateWorkDto: updateWorkDto) {
    return await this.prisma.work.update({
      where: { id },
      data: updateWorkDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.work.delete({ where: { id } });
  }
}
