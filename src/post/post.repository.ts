import { Post } from './post.entity';
import { EntityRepository, Repository } from 'typeorm';
import { PostDto } from './interfaces/post.dto';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {
  createPost = async (postDto: PostDto) => {
    return await this.save(postDto);
  }

  findOnePost = async (id: string) => {
    return this.findOneOrFail(id);
  }

  findAllWithRelations = async () => {
    return await this.find({relations: ['author']});
  }

  updatePost = async (id: string, postDto: PostDto) => {
    return this.save({ ...postDto, id: Number(id) });
  }

  removePost = async (id: string) => {
    await this.findOneOrFail(id);
    return this.delete(id);
  }
}
