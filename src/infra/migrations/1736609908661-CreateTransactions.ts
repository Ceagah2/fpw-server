import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTransactions1736609908661 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "transactions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "date",
                        type: 'timestamp'
                    },
                    {
                        name: "sentTo",
                        type: "uuid"
                    },
                    {
                        name: "cashAmount",
                        type: "float"
                    },
                    {
                        name: "createdAt",
                        type: "timestamp",
                        default: "now()"
                    },
                    {
                        name: "updatedAt",
                        type: "timestamp",
                        default: "now()"
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKUser",
                        columnNames: ["sentTo"],
                        referencedTableName: "users",
                        referencedColumnNames: ["id"]
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("transactions")
    }

}
