
import { listen as listenExpress, app } from '@/Express';
import { env } from '@root/lib/IUsingProcessEnv';


import { collection, handlePoints } from '@/api';

handlePoints(app, [...collection.values()]);


if (!parseInt(env.IS_ON_VERSEL_PRODUCTION ?? "0")){
	const {server} = await listenExpress({port: 8_000});
	console.log(server.address());
}


export default app;