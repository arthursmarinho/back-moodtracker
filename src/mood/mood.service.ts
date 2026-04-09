import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostMoodDto } from './dto/post-mood.dto';
import { Mood } from 'src/generated/prisma/client';
@Injectable()
export class MoodService {
  constructor(private prisma: PrismaService) {}

  async createPost(dto: PostMoodDto): Promise<Mood> {
    return this.prisma.mood.create({ 
      data: {
        ...dto
      } 
    });
  }

  async listPosts(): Promise<Mood[]> {
    return this.prisma.mood.findMany({
      orderBy: { publishedAt: 'desc' } 
    });
  }

  async deletePost(id: number): Promise<Mood> {
    return this.prisma.mood.delete({ 
      where: { id } 
    });
  }
} 