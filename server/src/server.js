'use strict';

import 'regenerator-runtime/runtime';
import { Server } from '@hapi/hapi';
import routes from './routes';


const server = Server({
    port: 8080,
    host: 'localhost',
    debug: { request: ['error'] }
});

server.route(routes);


export const init = async () => {
    await server.initialize();

    return server;
};

export const start = async () => {
    await server.start();
 
    console.log(`Server running at: ${server.info.uri}`);

    return server;
};


process.on('unhandledRejection', (err) => {

    console.log(err);
    process.exit(1);
});