import pkg from 'knex';
const { knex: knexFN } = pkg;
import { Model } from "objection";
import { Person } from "../model/person.model";

export const knex = knexFN({
  client: "sqlite3",
  connection: {
    filename: "file:memDb1?mode=memory&cache=shared",
    flags: ["OPEN_URI", "OPEN_SHAREDCACHE"],
  },
});

export async function createSchema() {
  if (await knex.schema.hasTable("persons")) {
    return;
  }

  // Create database schema. You should use knex migration files
  // to do this. We create it here for simplicity.
  await knex.schema.createTable("persons", (table) => {
    table.increments("id").primary();
    table.integer("parentId").references("persons.id");
    table.string("firstName");
    table.string("lastName");
  });
}

export async function main() {
  // Create some people.
  const sylvester = await Person.query().insertGraph({
    firstName: "Sylvester",
    lastName: "Stalone",
    children: [
      {
        firstName: "Sage",
        lastName: "Stalone",
      },
      {
        firstName: "Sophia",
        lastName: "Stalone",
      },
    ],
  });

  // console.log("created:", sylvester);

  Person.query().insert({ firstName: "sre" });

  // Fetch all people named Sylvester and sort them by id.
  // Load `children` relation eagerly.
  // const sylvesters = await Person.query()
  //   .where("firstName", "Sylvester")
  //   .withGraphFetched("children")
  //   .orderBy("id");

  // console.log("sylvesters:", sylvesters);
}

export const init = () =>
  createSchema()
    .then(() => main())
    // .then(() => knex.destroy())
    .catch((err) => {
      console.error(err);
      return knex.destroy();
    });

Model.knex(knex);
