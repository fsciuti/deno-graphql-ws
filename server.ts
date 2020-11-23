import { Application, Router, send } from './src/config/deps.ts';
import { buildSchema, graphql, Source } from "./src/config/deps.ts";

const port = 8000;

const properties = [
  {
    id: 'p1',
    name: 'Property P1',
    type: 'VILLA'
  },
  {
    id: 'p2',
    name: 'Property P2',
    type: 'STUDIO'
  },
];

const schema = buildSchema(`
  type Property {
    id: String
    name: String
    type: String
  }
  type Query {
    properties: [Property]
  }
`);

const resolvers = {
  properties: () => {
    return properties;
  },
};

const router = new Router();
router
  .get("/", context => {
    context.response.body = "Welcome to Deno-GraphQL Demo"
  })
  .get("/graphql", async context => {
    await send(context, './graphiql.html');
  })
  .post("/graphql", async context => {
    const requestBody = await context.request.body();
    const value = await requestBody.value;
    const query: Source = value.query;

    const response = await graphql(schema, query, resolvers);
    context.response.body =  response;
  });

const app = new Application();
app.use(router.routes(), router.allowedMethods());

console.log(`🦕 Deno OAK server running at http://localhost:${port}/ 🦕`);

await app.listen({ port });