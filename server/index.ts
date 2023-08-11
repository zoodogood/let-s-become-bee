
import { listen as listenExpress } from '@/Express';

const {server, app} = await listenExpress({port: 8_000});

// import api from '@/api/collection/hi';
