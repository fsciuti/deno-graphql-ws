import { serve } from "https://deno.land/std/http/server.ts";
import { serveFile } from "https://deno.land/std/http/file_server.ts";

import { buildSchema, graphql } from "https://cdn.skypack.dev/graphql@v15.4.0?dts";

const port = 8000;
const s = serve({ port });
console.log(`🦕 Deno server running at http://localhost:8000/ 🦕`);

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

for await (const req of s) {
  switch (req.url) {
    case "/graphql": 
      if (req.method === "POST") {
        // GraphQL Endpoint
        const decoder = new TextDecoder("utf-8");
        const headers = new Headers();
        headers.append("content-type", "application/json; charset=utf-8");

        const buf : Uint8Array = await Deno.readAll(req.body);
        const query = JSON.parse(decoder.decode(buf)).query;
        const response = await graphql(schema, query, resolvers);

        req.respond({ body: JSON.stringify(response), headers });
        continue;
      }

      if (req.method === "GET") {
        const content = await serveFile(req, './graphiql.html');
        req.respond(content);
        continue;
      }

      req.respond({ status: 405 });
      break;
    default:
      req.respond({ body: 'Welcome to Deno-GraphQL Demo' });
  }
}