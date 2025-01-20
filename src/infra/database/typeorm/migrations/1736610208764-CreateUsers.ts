import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1736610208764 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: 'users',
            columns: [
                {
                    name: 'id',
                    type: 'uuid',
                    isPrimary: true
                },
                {
                    name: 'firstName',
                    type: 'varchar'
                },
                {
                    name: 'lastName',
                    type: 'varchar'
                },
                {
                    name: 'photoUrl',
                    type: 'varchar',
                    isNullable: true
                },
                {
                    name: 'email',
                    type: 'varchar'
                },
                {
                    name: 'password',
                    type: 'varchar'
                },
                {
                    name: 'championshipsEntered',
                    type: 'int',
                    isNullable: true
                },
                {
                    name: 'championships',
                    type: 'jsonb',
                    isNullable: true
                },
                {
                    name: 'funds',
                    type: 'float'
                },
                {
                    name: 'transactions',
                    type: 'jsonb'
                },
                {
                    name: 'status',
                    type: 'varchar'
                },
                {
                    name: "createdAt",
                    type: 'timestamp',
                    default: 'now()'
                },
                {
                    name: "updatedAt",
                    type: 'timestamp',
                    default: 'now()'
                }
            ],
          }),
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users')
    }

}
