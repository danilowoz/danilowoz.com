import type { APIRoute } from "astro";
import { start } from "workflow/api";
import { helloWorkflow } from "../../workflows/hello";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
	const { name } = await request.json();
	const run = await start(helloWorkflow, [name]);
	return Response.json({ runId: run.runId });
};
