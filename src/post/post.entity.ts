import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
  OneToMany,
} from 'typeorm';
import { User } from '../user/user.entity';
import { Category } from '../category/category.entity';
import { PostCategories } from '../post-categories/post-categories.entity';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  public id?: number;

  @Column()
  public title: string;

  @Column()
  public content: string;

  @ManyToOne(type => User, (author: User) => author.posts)
  public author: User;

  @OneToMany(type => PostCategories, postCategories => postCategories.post)
  public categoryConnection: PostCategories[];

  // @ManyToMany(() => Category)
  // @JoinTable()
  // categories: Category[];
}
