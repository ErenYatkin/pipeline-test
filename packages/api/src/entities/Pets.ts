import { Entity, Column } from 'typeorm';
import { ObjectType, Field } from '@nestjs/graphql';
@Entity('Pets')
@ObjectType()
export class Pets {
  @Field(() => String)
  @Column()
  name: string;

  @Field(() => String)
  @Column()
  bday: string;
}
