import { serve } from "https://deno.land/std/http/server.ts";
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

for await (const req of s) {
  switch (req.url) {
    case "/graphql": 
      if (req.method === "POST") {
        // GraphQL Endpoint
        req.respond({ body: 'GraphQL Endpoint' });
        continue;
      }

      if (req.method === "GET") {
        req.respond({ body: 'GraphiQL Rendering' });
        continue;
      }

      req.respond({ status: 405 });
      break;
    default:
      req.respond({ body: 'Welcome to Deno-GraphQL Demo' });
  }
}