import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTables1572032147230 implements MigrationInterface {
    name = 'CreateTables1572032147230'

    public async up(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`CREATE TABLE "category" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_9c4e4a89e3674fc9f382d733f03" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "post_categories" ("postId" SERIAL NOT NULL, "categoryId" SERIAL NOT NULL, CONSTRAINT "PK_b8b835d4ca757299cd0d36804c0" PRIMARY KEY ("postId", "categoryId"))`, undefined);
        await queryRunner.query(`CREATE TABLE "post" ("id" SERIAL NOT NULL, "title" character varying NOT NULL, "content" character varying NOT NULL, "authorId" integer, CONSTRAINT "PK_be5fda3aac270b134ff9c21cdee" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "user" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "addressId" integer, CONSTRAINT "REL_217ba147c5de6c107f2fa7fa27" UNIQUE ("addressId"), CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "address" ("id" SERIAL NOT NULL, "street" character varying NOT NULL, "city" character varying NOT NULL, "country" character varying NOT NULL, CONSTRAINT "PK_d92de1f82754668b5f5f5dd4fd5" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`CREATE TABLE "dog" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "age" integer NOT NULL, "breed" character varying(100), CONSTRAINT "PK_187826f37fd8e592a5711350db1" PRIMARY KEY ("id"))`, undefined);
        await queryRunner.query(`ALTER TABLE "post_categories" ADD CONSTRAINT "FK_d9837aecaf223e3cadb55fed677" FOREIGN KEY ("postId") REFERENCES "post"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "post_categories" ADD CONSTRAINT "FK_9bd6598aa52c1550ed7707a71b9" FOREIGN KEY ("categoryId") REFERENCES "category"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "post" ADD CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
        await queryRunner.query(`ALTER TABLE "user" ADD CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271" FOREIGN KEY ("addressId") REFERENCES "address"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`, undefined);
    }

    public async down(queryRunner: QueryRunner): Promise<any> {
        await queryRunner.query(`ALTER TABLE "user" DROP CONSTRAINT "FK_217ba147c5de6c107f2fa7fa271"`, undefined);
        await queryRunner.query(`ALTER TABLE "post" DROP CONSTRAINT "FK_c6fb082a3114f35d0cc27c518e0"`, undefined);
        await queryRunner.query(`ALTER TABLE "post_categories" DROP CONSTRAINT "FK_9bd6598aa52c1550ed7707a71b9"`, undefined);
        await queryRunner.query(`ALTER TABLE "post_categories" DROP CONSTRAINT "FK_d9837aecaf223e3cadb55fed677"`, undefined);
        await queryRunner.query(`DROP TABLE "dog"`, undefined);
        await queryRunner.query(`DROP TABLE "address"`, undefined);
        await queryRunner.query(`DROP TABLE "user"`, undefined);
        await queryRunner.query(`DROP TABLE "post"`, undefined);
        await queryRunner.query(`DROP TABLE "post_categories"`, undefined);
        await queryRunner.query(`DROP TABLE "category"`, undefined);
    }

}
