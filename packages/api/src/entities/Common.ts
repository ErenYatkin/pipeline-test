import {
  BaseEntity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export abstract class Common extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn({ type: 'bigint' })
  id: number;

  @Field()
  @CreateDateColumn({ type: 'datetime', name: 'created_at' })
  createdAt: Date;

  @Field(() => Int)
  @Column('bigint', { name: 'created_by' })
  createdBy: number;

  @Field({ nullable: true })
  @UpdateDateColumn({ type: 'datetime', nullable: true, name: 'updated_at' })
  updatedAt: Date;

  @Field(() => Int, { nullable: true })
  @Column('bigint', { nullable: true, name: 'updated_by' })
  updatedBy?: number | null;

  @Field()
  @DeleteDateColumn({ type: 'datetime', name: 'deleted_at' })
  deletedAt: Date;
}
