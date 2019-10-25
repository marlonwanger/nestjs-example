import { Module } from '@nestjs/common';
import { PostCategoriesController } from './post-categories.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostCategories } from './post-categories.entity';
import { PostCategoriesRepository } from './post-categories.repository';

@Module({
  imports: [TypeOrmModule.forFeature([PostCategories, PostCategoriesRepository])],
  controllers: [PostCategoriesController],
})
export class PostCategoriesModule {}
