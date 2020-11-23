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
  const buf: Uint8Array = await Deno.readAll(req.body);
  req.respond({ body: buf });
}