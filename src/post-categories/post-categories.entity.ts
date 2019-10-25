import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { Post } from '../post/post.entity';
import { Category } from '../category/category.entity';

@Entity()
export class PostCategories {
  @PrimaryGeneratedColumn()
  public postId: number;

  @PrimaryGeneratedColumn()
  public categoryId: number;

  @ManyToOne(type => Post, post => post.categoryConnection, {
    primary: true,
  })
  @JoinColumn({ name: 'postId' })
  post: Post[];

  @ManyToOne(type => Category, category => category.postConnection, {
    primary: true,
  })
  @JoinColumn({ name: 'categoryId' })
  category: Category[];
}
