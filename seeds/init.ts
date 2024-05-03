import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  await knex("persons").del();

  // Inserts seed entries

  await knex("persons").insert([
    { id: 1, firstName: "rowValue1", lastName: "last1" },
    { id: 2, firstName: "rowValue2", lastName: "last2" },
    { id: 3, firstName: "rowValue3", lastName: "last3" },
  ]);
}
