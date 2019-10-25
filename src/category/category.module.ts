import { Module } from '@nestjs/common';
import { CategoryController } from './category.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryRepository } from './category.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Category, CategoryRepository])],
  controllers: [CategoryController],
})
export class CategoryModule {}
