import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { CategoryDto } from './interfaces/category.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryRepository } from './category.repository';

@Controller('category')
export class CategoryController {
  constructor(
    @InjectRepository(CategoryRepository)
    private readonly categoryRepository: CategoryRepository,
  ) {}

  @Get()
  getAll() {
    return this.categoryRepository.find();
  }

  @Post()
  create(@Body() addressDto: CategoryDto) {
    return this.categoryRepository.createCategory(addressDto);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.categoryRepository.findOneCategory(id);
  }

  @Put(':id')
  update(@Param('id') id: string, @Body() addressDto: CategoryDto) {
    return this.categoryRepository.updateCategory(id, addressDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.categoryRepository.removeCategory(id);
  }
}
