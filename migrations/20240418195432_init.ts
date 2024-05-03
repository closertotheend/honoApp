import type { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTableIfNotExists("persons", (table) => {
    table.increments("id").primary();
    table.integer("parentId").references("id");
    table.string("firstName");
    table.string("lastName");
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("persons");
}
