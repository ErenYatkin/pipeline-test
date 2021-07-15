import { Entity, Column, ManyToOne, JoinColumn } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Common } from './Common';
import { ResultNoteValues } from './ResultNoteValues';

@Entity('Result_Notes')
@ObjectType()
export class ResultNotes extends Common {
  constructor(
    name: string,
    createdBy: number,
    resultNoteValueId: ResultNoteValues,
  ) {
    super();
    this.name = name;
    this.createdBy = createdBy;
  }
  @Field(() => String)
  @Column('varchar')
  name: string;
}
