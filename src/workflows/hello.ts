import { sleep } from "workflow";

export async function helloWorkflow(name: string) {
	"use workflow";

	const greeting = await buildGreeting(name);
	await sleep("5s");
	await logGreeting(greeting);

	return { greeting };
}

async function buildGreeting(name: string) {
	"use step";
	return `Hello, ${name}!`;
}

async function logGreeting(greeting: string) {
	"use step";
	console.log(greeting);
}
