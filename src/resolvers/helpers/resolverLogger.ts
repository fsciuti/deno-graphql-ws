// deno-lint-ignore no-explicit-any
export const resolveLogger = (ctx: any, resolverName: string) => {
  const agent: string = ctx.req.headers.get("User-Agent");
  ctx.res.headers.set(
    "resolver",
    `${agent.toLowerCase().replace("/", "-")}-${resolverName}`,
  );
};
