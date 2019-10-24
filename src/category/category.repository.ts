import { Category } from './category.entity';
import { EntityRepository, Repository } from 'typeorm';
import { CategoryDto } from './interfaces/category.dto';

@EntityRepository(Category)
export class CategoryRepository extends Repository<Category> {
  createCategory = async (categoryDto: CategoryDto) => {
    return await this.save(categoryDto);
  }

  findOneCategory = async (id: string) => {
    return this.findOneOrFail(id);
  }

  updateCategory = async (id: string, categoryDto: CategoryDto) => {
    return this.save({ ...categoryDto, id: Number(id) });
  }

  removeCategory = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  }
}
