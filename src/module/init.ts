import pkg from 'knex';
const { knex: knexFN } = pkg;
import { Model } from "objection";
import { Person } from "../model/person.model";
import  {config} from "../../connection";

export const knex = knexFN(config[process.env.NODE_ENV!]);

export async function main() {
  // Create some people.
  await Person.query().insertGraph({
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


}

export const init = () =>{
  Model.knex(knex);
}

