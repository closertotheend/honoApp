import { Person } from "../model/person.model";

export const findPersons = async () => {
  const persons = await Person.query()
    .where("firstName", "Sylvester")
    .withGraphFetched("children")
    .orderBy("id");
  return persons.map((it) => JSON.stringify(it.$toJson()));
};
