import { MigrationInterface, QueryRunner, TableForeignKey } from 'typeorm';
import { CreateTableHelper } from '../src/helper/MigrationHelpers';

export class ResultNoteValuesCreateTable1625321536103
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    const columns = [
      {
        name: 'name',
        type: 'varchar',
      },
      {
        name: 'result_note_id',
        type: 'bigint',
      },
    ];
    await CreateTableHelper(columns, queryRunner, 'Result_Note_Values', {
      foreignKeys: [
        new TableForeignKey({
          columnNames: ['result_note_id'],
          referencedColumnNames: ['id'],
          referencedTableName: 'Result_Notes',
        }),
      ],
    });
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    queryRunner.query(`DROP TABLE Result_Note_Values`);
  }
}
