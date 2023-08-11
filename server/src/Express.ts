import Express from 'express';
import assert from 'assert/strict';
import type { Express as ExpressType } from 'express';
import type http from 'http';

const app = Express();
type ServerType = http.Server;

async function listen(
	{port}: {port?: number} = {}
): 
	never | Promise<{app: ExpressType, server: ServerType}>
{
	let server: ServerType | null = null;

	const whenListen = new Promise(
		(resolve) => server = app.listen(port, resolve) as ServerType
	) as Promise<void>;

	
	
	
	await whenListen;
	assert(server !== null);
	
	
	
	return {app, server};
}

export { app, listen, ServerType };