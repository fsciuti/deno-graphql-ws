import { App } from './src/app.ts';
import { config } from "./src/config/deps.ts";

config({ export: true });
const port = Number(Deno.env.get("PORT")) || 8000;

const gqlApp = new App(port);
gqlApp.listen();