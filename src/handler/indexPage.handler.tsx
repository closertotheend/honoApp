import { Hono } from "hono";
import { Top } from "../view/indexPage.view";
import { findPersons } from "../service/indexPage.service";

const app = new Hono();

app.get("/", async (c) => {
  const persons = await findPersons();
  return c.html(<Top messages={persons} />);
});

export default app;
