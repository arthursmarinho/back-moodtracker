import { IsNumber, IsString, IsArray } from 'class-validator';

export class PostMoodDto {
  @IsString()
  author: string;

  @IsArray()
  @IsString({ each: true })
  habits: string[];

  @IsNumber()
  mood: number;

  @IsString()
  content: string;
}
