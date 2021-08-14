import { Entity, Column } from 'typeorm';
@Entity('Pets')
export class Pets {
  @Column()
  name: string;
  @Column()
  bday: string;
}
