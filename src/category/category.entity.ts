import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { PostCategories } from '../post-categories/post-categories.entity';

@Entity()
export class Category {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @OneToMany(type => PostCategories, postCategories => postCategories.category)
  public postConnection: PostCategories[];
}
