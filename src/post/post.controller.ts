import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostDto } from './interfaces/post.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostRepository } from './post.repository';

@Controller('post')
export class PostController {
  constructor(
    @InjectRepository(PostRepository)
    private readonly postRepository: PostRepository,
  ) {}

  @Get()
  getAll() {
    return this.postRepository.find();
  }

  @Get('author')
  getAllWithRelations() {
    return this.postRepository.findAllWithRelations();
  }

  @Post()
  create(@Body() postDto: PostDto) {
    return this.postRepository.createPost(postDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postRepository.findOnePost(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() postDto: PostDto) {
    return this.postRepository.updatePost(id, postDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postRepository.removePost(id);
  }
}
