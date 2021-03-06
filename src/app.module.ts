import { Module, DynamicModule } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DogsModule } from './dogs/dogs.module';
import { UserModule } from './user/user.module';
import { AddressModule } from './address/address.module';
import { PostModule } from './post/post.module';
import { CategoryModule } from './category/category.module';
import { PostCategoriesModule } from './post-categories/post-categories.module';
import * as ormconfig from './ormconfig';

export function DatabaseOrmModule(): DynamicModule {
  // we could load the configuration from dotEnv here,
  // but typeORM cli would not be able to find the configuration file.

  return TypeOrmModule.forRoot(ormconfig);
}

@Module({
  imports: [
    TypeOrmModule.forRoot(ormconfig),
    DogsModule,
    AddressModule,
    UserModule,
    PostModule,
    CategoryModule,
    PostCategoriesModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
