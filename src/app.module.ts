import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaService } from './prisma/prisma.service';
import { MoodService } from './mood/mood.service';
import { MoodController } from './mood/mood.controller';

@Module({
  imports: [],
  controllers: [AppController, MoodController],
  providers: [AppService, PrismaService, MoodService],
})
export class AppModule {}
