import { User } from '../../user/user.entity';

export class PostDto {
  readonly title: string;
  readonly content: string;
  readonly author: User;
}
