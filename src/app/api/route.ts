import { getRequestContext } from "@cloudflare/next-on-pages";

export const runtime = "edge";

export async function GET() {

  const myKv = getRequestContext().env["next.js-tco"];
  await myKv.put("foo", "bar");
  const foo = await myKv.get("foo");

  return new Response(foo);
}
