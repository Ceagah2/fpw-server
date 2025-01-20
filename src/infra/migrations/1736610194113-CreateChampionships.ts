import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateChampionships1736610194113 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "championships",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "name",
                        type: "varchar",
                        isUnique: true
                    },
                    {
                        name: "photoUrl",
                        type: "varchar",
                        isNullable: true
                    },
                    {
                        name: "gameName",
                        type: "varchar",
                    },
                    {
                        name: "type",
                        type: "varchar"
                    },
                    {
                        name: "startDate",
                        type: 'timestamp'
                    },
                    {
                        name: "endDate",
                        type: 'timestamp'
                    },
                    {
                        name: "numsOfPlayers",
                        type: 'int',
                    },
                    {
                        name: "players",
                        type: "jsonb",
                        isNullable: true
                    },
                    {
                        name: "registrationFee",
                        type: 'float'
                    },
                    {
                        name: "prizes",
                        type: "jsonb",
                        isNullable: true
                    },
                    {
                        name: "rules",
                        type: "varchar"
                    },
                    {
                        name: "status",
                        type: "varchar"
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("championships")
    }

}
