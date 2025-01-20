import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategories1736608921975 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'categories',
                columns: [
                    {
                        name: "id",
                        type: 'uuid',
                        isPrimary: true
                    },
                    {
                        name: "name",    
                        type: 'varchar',
                        isUnique: true                        
                    },
                    {
                        name: "description",
                        type: 'varchar',
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
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories");
    }

}
