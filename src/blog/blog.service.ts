import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { createBlogDto, updateBlogDto } from './dto';

@Injectable()
export class BlogService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createBlogDto: createBlogDto) {
    const blog = await this.prisma.blog.create({
      data: createBlogDto,
    });
    return blog;
  }

  async findAll() {
    return await this.prisma.blog.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.blog.findUnique({ where: { id } });
  }

  async update(id: string, updateBlogDto: updateBlogDto) {
    return await this.prisma.blog.update({
      where: { id },
      data: updateBlogDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.blog.delete({ where: { id } });
  }
}
