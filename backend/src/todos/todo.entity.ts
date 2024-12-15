import { Field, ID, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class TodoEntity {
  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field({ nullable: true })
  description?: string;

  @Field()
  created_at: Date;

  @Field()
  updated_at: Date;
}
