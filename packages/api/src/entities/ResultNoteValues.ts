import { Entity, Column, ManyToOne, JoinColumn} from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Common } from './Common';
import { ResultNotes } from './ResultNotes';

@Entity('Result_Note_Values')
@ObjectType()
export class ResultNoteValues extends Common {
  constructor(name: string, createdBy: number, resultNoteId: ResultNotes) {
    super();
    this.name = name;
    this.createdBy = createdBy;
    this.resultNoteId = resultNoteId;
  }
  @Field(() => String)
  @Column('varchar')
  name: string;

  @Field(() => Int)
  @ManyToOne(() => ResultNotes)
  @JoinColumn({ name: 'result_note_id', referencedColumnName: 'id' })
  resultNoteId: ResultNotes;
}
