import { Hono } from "hono";
import { serve } from "@hono/node-server";
import indexPageHandler from "./handler/indexPage.handler";
import { init } from "./module/init";

const app = new Hono();

app.route("/", indexPageHandler);

init();

const port = 3000;
console.log(`Server is running on http://localhost:${port}`);

serve({
  fetch: app.fetch,
  port,
});
