import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { PostCategoriesDto } from './interfaces/post-categories-category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { PostCategoriesRepository } from './post-categories.repository';

@Controller('post-categories-category')
export class PostCategoriesController {
  constructor(
    @InjectRepository(PostCategoriesRepository)
    private readonly postCategoryRepository: PostCategoriesRepository,
  ) {}

  @Get()
  getAll() {
    return this.postCategoryRepository.find();
  }

  @Post()
  create(@Body() categoryDto: PostCategoriesDto) {
    return this.postCategoryRepository.createPostCategories(categoryDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postCategoryRepository.findOnePostCategories(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() categoryDto: PostCategoriesDto,
  ) {
    return this.postCategoryRepository.updatePostCategories(id, categoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postCategoryRepository.removePostCategories(id);
  }
}
