import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module';
import { PrismaModule } from 'prisma/prisma.module';
import { WorkModule } from './work/work.module';

@Module({
  imports: [BlogModule, PrismaModule, WorkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
