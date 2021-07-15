import { Entity, ManyToOne, JoinColumn, Unique } from 'typeorm';
import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Common } from './Common';
import { ResultNotes } from './ResultNotes';
import { Activity } from './Activity';
import { ResultNoteValues } from './ResultNoteValues';

@Entity('Activity_Result_Notes')
@ObjectType()
@Unique('activity_result_note_unique_id', ['activityId', 'resultNoteValueId'])
export class ActivityResultNotes extends Common {
  constructor(
    activityId: Activity,
    resultNoteValueId: ResultNoteValues,
    createdBy: number,
  ) {
    super();
    this.resultNoteValueId = resultNoteValueId;
    this.activityId = activityId;
    this.createdBy = createdBy;
  }
  @Field(() => Int)
  @ManyToOne(() => Activity)
  @JoinColumn({ name: 'activity_id', referencedColumnName: 'id' })
  activityId: Activity;

  @Field(() => Int)
  @ManyToOne(() => ResultNoteValues)
  @JoinColumn({ name: 'result_note_value_id', referencedColumnName: 'id' })
  resultNoteValueId: ResultNoteValues;
}
