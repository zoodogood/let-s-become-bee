
import { listen as listenExpress } from '@/Express';

const {server, app} = await listenExpress({port: 8_000});

import { collection, handlePoints } from '@/api';

handlePoints(app, [...collection.values()]);

console.log(server.address());


