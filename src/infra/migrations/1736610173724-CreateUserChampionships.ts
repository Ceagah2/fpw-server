import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUserChampionships1736610173724 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "user_championships",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true
                    },
                    {
                        name: "userId",
                        type: "uuid"
                    },
                    {
                        name: "championshipId",
                        type: "uuid"
                    },
                    {
                        name: "role",
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
                ],
                foreignKeys: [
                    {
                        name: "FKUserChampionshipsUser",
                        columnNames: ["userId"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "users",
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    },
                    {
                        name: "FKUserChampionshipsChampionship",
                        columnNames: ["championshipId"],
                        referencedColumnNames: ["id"],
                        referencedTableName: "championships",
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE"
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("user_championships");
    }

}
