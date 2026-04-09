import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PostMoodDto } from './dto/post-mood.dto';
import { Mood } from 'src/generated/prisma/client';

@Injectable()
export class MoodService {
  constructor(private prisma: PrismaService) {}

  async createPost(dto: PostMoodDto): Promise<Mood> {
    const { mood, ...rest } = dto;
    return this.prisma.mood.create({
      data: {
        ...rest,
        moods: mood,
        publishedAt: new Date(),
      },
    });
  }

  async listPosts(startDate?: string, endDate?: string): Promise<Mood[]> {
    return this.prisma.mood.findMany({
      where: {
        publishedAt: {
          gte: startDate ? new Date(startDate) : undefined,
          lte: endDate ? new Date(endDate) : undefined,
        },
      },
      orderBy: { publishedAt: 'desc' },
    });
  }

  async deletePost(id: number): Promise<Mood> {
    return this.prisma.mood.delete({
      where: { id },
    });
  }
}
