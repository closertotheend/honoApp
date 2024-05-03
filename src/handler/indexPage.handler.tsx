import { Hono } from "hono";
import { Top } from "../view/indexPage.view";
import { findPersons } from "../service/indexPage.service";
import { Person } from "../model/person.model";

const app = new Hono();

app.get("/", async (c) => {
  const persons = await findPersons();
  return c.html(<Top messages={persons} />);
});

app.get("/all", async (c) => {
  const persons = await Person.query();
  return c.html(<Top messages={persons.map((it) => JSON.stringify(it.$toJson()))} />);
});

app.get("/insert", async (c) => {
  const persons = await Person.query().insert({
    firstName: "Ilja",
    lastName: "G",
  });
  return c.redirect("/all");
});

app.get("/test-insert", async (c) => {
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
  return c.status(200);
});

app.get("/test-read", async (c) => {
  await findPersons();
  return c.status(200);
});


export default app;
