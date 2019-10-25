import { PostCategories } from './post-categories.entity';
import { EntityRepository, Repository } from 'typeorm';
import { PostCategoriesDto } from './interfaces/post-categories-category.dto';

@EntityRepository(PostCategories)
export class PostCategoriesRepository extends Repository<PostCategories> {
  createPostCategories = async (postCcategoryDto: PostCategoriesDto) => {
    return await this.save(postCcategoryDto);
  }

  findOnePostCategories = async (id: string) => {
    return this.findOneOrFail(id);
  }

  updatePostCategories = async (id: string, postCcategoryDto: PostCategoriesDto) => {
    return this.save({ ...postCcategoryDto, id: Number(id) });
  }

  removePostCategories = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  }
}
