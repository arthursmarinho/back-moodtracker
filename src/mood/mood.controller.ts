import { Controller, Post, Body, Delete, Get, Param, ParseIntPipe} from '@nestjs/common';
import { MoodService } from './mood.service';
import { PostMoodDto } from './dto/post-mood.dto';

@Controller('mood')
export class MoodController {
      constructor(private readonly moodService: MoodService) {}

      @Post()
  create(@Body() PostMoodDto: PostMoodDto) {
    return this.moodService.createPost(PostMoodDto);
  }

    @Get()
  list() {
    return this.moodService.listPosts();
  }

  @Delete(':id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.moodService.deletePost(id);
  }

}
