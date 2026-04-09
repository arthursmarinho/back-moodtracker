import { IsString } from 'class-validator';

export class PostMoodDto {
  @IsString()
  author: string
   @IsString()
  moods: string[];
  @IsString()
  content: string;
 
}