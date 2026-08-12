import { createFromReadableStream } from "@vitejs/plugin-rsc/ssr";
import { renderToReadableStream as renderHTMLToReadableStream } from "react-dom/server.edge";
import {
	unstable_RSCStaticRouter as RSCStaticRouter,
	unstable_routeRSCServerRequest as routeRSCServerRequest,
} from "react-router";

export async function generateHTML(
	request: Request,
	fetchServer: (request: Request) => Promise<Response>,
): Promise<Response> {
	// First, call the RSC server to get the serialized response
	const serverResponse = await fetchServer(request);

	return await routeRSCServerRequest({
		// The incoming request.
		request,
		// The RSC server response.
		serverResponse,
		// Provide the React Server touchpoints.
		createFromReadableStream,
		// Render the router to HTML.
		async renderHTML(getPayload, options) {
			const payload = await getPayload();
			const formState =
				payload.type === "render" ? await Promise.resolve(payload.formState) : undefined;

			const bootstrapScriptContent = await import.meta.viteRsc.loadBootstrapScriptContent("index");

			return await renderHTMLToReadableStream(<RSCStaticRouter getPayload={getPayload} />, {
				...options,
				bootstrapScriptContent,
				formState,
				signal: request.signal,
			});
		},
	});
}
