import { App } from './src/app.ts';
const port = 8000;

const gqlApp = new App(port);
gqlApp.listen();